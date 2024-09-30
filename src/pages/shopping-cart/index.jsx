import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/cart";
import { StyledH1 } from "../../styles/styled-components/h1";
import { StyledDiv } from "../../styles/styled-components/centered-div";
import { StyledCartContainer } from "../../styles/styled-components/cart/cartContainer";
import { StyledButton } from "../../styles/styled-components/buttons";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const groupedItems = useMemo(() => {
    const itemMap = {};

    cartItems.forEach((item) => {
      if (itemMap[item.id]) {
        itemMap[item.id].quantity += 1;
      } else {
        itemMap[item.id] = { ...item, quantity: 1 };
      }
    });

    return Object.values(itemMap);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return groupedItems.reduce((total, product) => {
      return total + product.discountedPrice * product.quantity;
    }, 0);
  }, [groupedItems]);

  return (
    <main>
      <StyledH1>Cart</StyledH1>
      <StyledDiv>
        <div className="divider"></div>
        {groupedItems.length === 0 ? (
          <div>Your cart is empty</div>
        ) : (
          <div>
            {groupedItems.map((product) => (
              <div key={product.id}>
                <StyledCartContainer>
                  <Link to={`/${product.id}`}>
                    <img
                      src={product.image.url}
                      alt={product.title}
                      className="cartImg"
                    />
                  </Link>

                  <div>
                    <Link to={`/${product.id}`}>
                      <h3>{product.title}</h3>
                    </Link>
                    <p>Price: {product.discountedPrice} KR</p>
                    <p>Quantity: {product.quantity}</p>
                    <StyledButton onClick={() => removeFromCart(product.id)}>
                      Remove
                    </StyledButton>
                  </div>
                </StyledCartContainer>
                <div className="divider"></div>
              </div>
            ))}
            <div>
              <p>
                Total: <span className="bold">{totalPrice} KR</span>
              </p>
            </div>
            <Link to="/checkout">
              <StyledButton>Checkout</StyledButton>
            </Link>
          </div>
        )}
      </StyledDiv>
    </main>
  );
}

export { Cart };
