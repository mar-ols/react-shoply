import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Cart } from "./pages/shopping-cart";
import { Checkout } from "./pages/checkout-success";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { DisplayProduct } from "./pages/single-product";
import "./styles/App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path=":id" element={<DisplayProduct />} />
          <Route path="*" element={<div>Route not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
