import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import StoryProvider from "./provider/story/story.provider";
import { PURPLE } from "./utils/colors";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
    padding: 0;
    margin: 0rem;
    box-sizing: border-box;
}
  body {
    padding: 0;
    margin: 0 10rem 0 10rem;
    min-height: 100vh;
    background-color: ${PURPLE};
    background-size: cover;
    color: #b2bbc8;
    font-family: Avenir, Nunito, sans-serif;
    font-size: 16px;
    font-weight: 500;
    @media screen and (max-width: 1000px) {
      margin: 0;
    }
  }

`;

ReactDOM.render(
  <div>
    <GlobalStyle />
    <StoryProvider>
      <App />
    </StoryProvider>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
