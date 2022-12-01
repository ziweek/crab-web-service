import React from "react";
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyleWrapper = createGlobalStyle`


  * {
    box-sizing: border-box;
  }
  body, button, form, h1, h2, h3, h4, h5, h6, p, input, legend, li, ol, ul, select, table, td, textarea, th {
    margin:0;
    padding:0;
    background-color: #1D1D1D;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    background:none;
    border:0;
    cursor:pointer;

    &:disabled {
      cursor: default;
    }
  }

  *:focus {
    outline: none;
  }

  html {
    font-size: 62.5%;

    -webkit-tap-highlight-color: transparent;
  }
body {
  padding: 0;
  margin: 0;
 -ms-overflow-style: none;
  /* font-family: -apple-system, InkLipquid; */
}
::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 415px) {
    html {
      font-size: 9.375px;
    }
  }

  @media screen and (max-width: 413px) {
    html {
      font-size: 8.75px;
    }
  }

  @media screen and (max-width: 361px) {
    html {
      font-size: 8.125px;
    }
  }

  @media screen and (max-width: 321px) {
    html {
      font-size: 7.5px;
    }
  }
`;

const Container = styled.div`
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  max-width: 430px;
  width: 100vw;
  margin: 0 auto;
  font-size: 1.6rem;
  background-color: white;
  font-family: "Noto Sans KR";
  color: #222222;
`;

const GlobalStyle = ({ children }: any) => {
  return (
    <>
      <GlobalStyleWrapper />
      <Container>{children}</Container>
    </>
  );
};

export default GlobalStyle;
