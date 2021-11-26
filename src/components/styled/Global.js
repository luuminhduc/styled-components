import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400&display=swap');

*{
    box-sizing: border-box;
}

body{
    margin: 0;
    padding: 0;
    font-family: 'Mulish', sans-serif;
    background-color: ${({ theme }) => theme.colors.light};
}

`;

export default GlobalStyle;
