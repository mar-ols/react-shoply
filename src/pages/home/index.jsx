import { ProductCard } from "../../components/product-card";
import { StyledH1 } from "../../styles/styled-components/h1";

function Home() {
  return (
    <main>
      <StyledH1>Products</StyledH1>
      <ProductCard />
    </main>
  );
}

export { Home };
