import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import DetailPage from "./pages/Details"

import { StoreProvider } from "./context/index";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/product/:product" component={ProductPage} />
          <Route exact path="/detail/:productId" component={DetailPage} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
