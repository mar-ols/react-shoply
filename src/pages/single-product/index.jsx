import { useContext } from "react";
import { CartContext } from "../../components/cart";
import { useProduct } from "../../components/hooks/api/product";
import { StyledH1 } from "../../styles/styled-components/h1";
import { StyledProduct } from "../../styles/styled-components/single-product";
import { DisplayPrice } from "../../components/price";
import { StyledButton } from "../../styles/styled-components/buttons";
import { StyledReview } from "../../styles/styled-components/review";
import { DisplayStars } from "../../components/reviews/stars";

function DisplayProduct() {
  const { addToCart } = useContext(CartContext);
  const cartConfirmation = document.querySelector("#cartConfirmation");

  const handleAddToCart = () => {
    addToCart(data);

    cartConfirmation.classList.remove("sentForm");
  };

  const { data, isLoading, isError } = useProduct();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>No product data</div>;
  }

  return (
    <>
      <main>
        <StyledH1>{data.title}</StyledH1>
        <StyledProduct>
          <div className="productImg">
            <img src={data.image.url} alt={data.image.alt || data.title} />
          </div>
          <h2>{data.title}</h2>
          {DisplayPrice(data.discountedPrice, data.price)}
          <p>{data.description}</p>
          <div>
            <StyledButton onClick={handleAddToCart}>Add to cart</StyledButton>
          </div>
          <p id="cartConfirmation" className="sentForm">
            Product added to cart
          </p>
          <div className="divider"></div>
          <h3>Reviews</h3>
          {data.reviews.length === 0 ? (
            <p>No reviews yet</p>
          ) : (
            data.reviews.map((review) => (
              <StyledReview key={review.id}>
                {DisplayStars(review.rating)}
                <p>
                  <span className="bold">{review.description}</span> -{" "}
                  {review.username}
                </p>
              </StyledReview>
            ))
          )}
        </StyledProduct>
      </main>
    </>
  );
}

export { DisplayProduct };
