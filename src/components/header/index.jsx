import { useContext } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav } from "../nav";
import Logo from "../../assets/images/shoply_logo.png";
import ShoppingCart from "../../assets/images/shopping_cart.png";
import { StyledSearch } from "../../styles/styled-components/search";
import { StyledNavSection } from "../../styles/styled-components/nav-section";
import { StyledLogoSection } from "../../styles/styled-components/logo-section";
import { CartContext } from "../cart";
import "../../styles/App.css";

/* eslint-disable react/prop-types */

function Header({ products }) {
  const { cartItems } = useContext(CartContext);

  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchInput) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchInput, products]);

  const handleProductClick = () => {
    setSearchInput("");
    setFilteredProducts([]);
  };

  return (
    <header>
      <StyledLogoSection>
        <img src={Logo} alt="Shoply logo" className="logo" />
        <div className="search-container">
          <StyledSearch
            type="text"
            aria-label="search"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {filteredProducts.length > 0 && (
            <div className="search-dropdown">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/${product.id}`}
                  className="dropdown-item"
                  onClick={handleProductClick}
                >
                  {product.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </StyledLogoSection>
      <StyledNavSection>
        <Nav />
        <div className="cart-container">
          {" "}
          <Link to="/cart">
            <img
              src={ShoppingCart}
              alt="Shopping cart icon"
              className="cart-icon"
            />
          </Link>
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </div>
      </StyledNavSection>
    </header>
  );
}

export { Header };
