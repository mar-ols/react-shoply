import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styles/theme.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import { CartProvider } from "./components/cart/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Theme>
          <GlobalStyle />
          <App />
        </Theme>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>
);
