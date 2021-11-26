import React from "react";
import { Container } from "./components/styled/Container.styled";
import GlobalStyle from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import theme from "./components/styled/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container></Container>
    </ThemeProvider>
  );
};

export default App;
