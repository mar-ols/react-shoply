import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";
import { useProducts } from "../hooks/api/products";

function Layout() {
  const {
    data: products,
    isLoading,
    isError,
  } = useProducts("https://v2.api.noroff.dev/online-shop");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <>
      <Header products={products} />
      <Outlet />
      <Footer />
    </>
  );
}

export { Layout };
