import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/Product";

import { StoreProvider } from "./store/index";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={ProductList} />
          <Route exact path="/product/:product" component={ProductList} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
