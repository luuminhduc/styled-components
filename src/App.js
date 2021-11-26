import React from "react";
import { Provider } from "react-redux";
import { Container } from "./components/styled/Container.styled";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Container>
          <p>Hello</p>
          <h1>LSDOSDOP</h1>
        </Container>
        <h1>sdsadqw</h1>
      </div>
    </Provider>
  );
};

export default App;
