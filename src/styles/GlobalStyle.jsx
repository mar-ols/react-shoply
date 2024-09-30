import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    --color-primary: #2c5474;
    --color-secondary: #fff;
    --color-complimentary: #3b5668;
    --color-info: #FFD700;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;}

  body {
    font-family: "Jura";
    src: url("../assets/fonts/Jura-VariableFont_wght.ttf") format("truetype");
    height: 100%;
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  header a {
    color: #fff;
  }

  header a.active {
    color: #ffd700;
  }

  a {
  color: var(--color-primary)
  }

  .logo {
    max-width: 100%;
    padding: 1rem 0rem 2rem 1rem;
  }

  nav ul {
    display: flex;
    list-style-type: none;
    padding-left: 1rem;
  }

  nav li {
    margin-right: 0.5rem;
  }

  .nav img {
    margin-right: 1rem;
  }

  footer p {
    margin: 0;
  }
`;

export default GlobalStyle;
