import { StyledProductCardContainer } from "../../styles/styled-components/product-card-container";
import { useProducts } from "../hooks/api/products";
import { Link } from "react-router-dom";
import { StyledButton } from "../../styles/styled-components/buttons";
import { DisplayPrice } from "../price";

function ProductCard() {
  const { data, isLoading, isError } = useProducts(
    "https://v2.api.noroff.dev/online-shop"
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <>
      <StyledProductCardContainer>
        {data.map((product) => (
          <div key={product.id} className="productCard">
            <img src={product.image.url} alt={product.title} />
            <Link to={product.id} className="bold">
              {product.title}
            </Link>
            {DisplayPrice(product.discountedPrice, product.price)}
            <Link to={product.id}>
              <StyledButton>View Product</StyledButton>
            </Link>
          </div>
        ))}
      </StyledProductCardContainer>
    </>
  );
}

export { ProductCard };