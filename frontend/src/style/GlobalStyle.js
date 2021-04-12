import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Stardos+Stencil:wght@400;700&display=swap');
  @font-face {
    font-family: "Noto Sans CJK KR", sans-serif;
    font-style: normal;
    font-weight: 100;
    src: url("./fonts/NotoSansCJKkr-Thin.otf") format("otf");
  }
  @font-face {
    font-family: "Noto Sans CJK KR", sans-serif;
    font-style: normal;
    font-weight: 200;
    src: url("./fonts/NotoSansCJKkr-Light.otf") format("otf");
  }
  @font-face {
    font-family: "Noto Sans CJK KR", sans-serif;
    font-style: normal;
    font-weight: 300;
    src: url("./fonts/NotoSansCJKkr-DemiLight.otf") format("otf");
  }
  @font-face {
    font-family: "Noto Sans CJK KR", sans-serif;
    font-style: normal;
    font-weight: 400;
    src: url("./fonts/NotoSansCJKkr-Medium.otf") format("otf");
  }
  @font-face {
    font-family: "Noto Sans CJK KR", sans-serif;
    font-style: normal;
    font-weight: 500;
    src: url("./fonts/NotoSansCJKkr-Regular.otf") format("otf");
  }
  @font-face {
    font-family: "Noto Sans CJK KR", sans-serif;
    font-style: normal;
    font-weight: bold;
    src: url("./fonts/NotoSansCJKkr-Bold.otf") format("otf");
  }
  @font-face {
    font-family: "Amarillo", sans-serif;
    font-style: normal;
    font-weight: normal;
    src: url("./fonts/Amarillo.otf") format("otf");
  }
  
  html {
    font-family: "Noto Sans CJK KR",'Stardos Stencil','Amarillo', sans-serif;
    font-size: 10px;
    overflow-x:auto
  }
  * {
    font-family: "Noto Sans CJK KR",'Stardos Stencil','Amarillo', sans-serif;
    margin: 0;
    padding: 0;

  }

  body {
    box-sizing: border-box;
    font-family: "Noto Sans CJK KR",'Stardos Stencil','Amarillo', sans-serif;
    background-color:black;
    overflow-x:auto
  }
`;

export default GlobalStyle;
