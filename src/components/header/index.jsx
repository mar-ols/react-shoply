import { Nav } from "../nav";
import Logo from "../../assets/images/shoply_logo.png";
import ShoppingCart from "../../assets/images/shopping_cart.png";
import { StyledNavSection } from "../../styles/styled-components/nav-section";
import { StyledLogoSection } from "../../styles/styled-components/logo-section";
import { ProductSearch } from "../search";
import "../../styles/App.css";

function Header() {
  return (
    <header>
      <StyledLogoSection>
        <img src={Logo} alt="Shoply logo" className="logo" />
        <ProductSearch />
      </StyledLogoSection>
      <StyledNavSection>
        <Nav />
        <div className="cart-container">
          <img
            src={ShoppingCart}
            alt="Shopping cart icon"
            className="cart-icon"
          />
        </div>
      </StyledNavSection>
    </header>
  );
}

export { Header };
