import { useState, useEffect } from "react";
import { useProducts } from "../hooks/api/products";

function ProductSearch() {
  const {
    data: products,
    isLoading,
    isError,
  } = useProducts("https://v2.api.noroff.dev/online-shop");
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchInput, products]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price} KR</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export { ProductSearch };
