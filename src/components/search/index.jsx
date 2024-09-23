import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/api/products";
import { StyledSearch } from "../../styles/styled-components/search";

function ProductSearch() {
  const {
    data: products,
    isLoading,
    isError,
  } = useProducts("https://v2.api.noroff.dev/online-shop");
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="search-container">
      <StyledSearch
        type="text"
        aria-label="Search"
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
  );
}

export { ProductSearch };
