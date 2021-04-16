import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
import products from "../json/products.json";
import { SET_PRODUCT_ITEMS, SET_NAVBAR_ACTIVEITEM } from "../utils/constants";

export const StoreContext = createContext();
const initialState = {
  page: {
    products,
  },
  navBar: {
    activeItem: "/",
  },
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case SET_PRODUCT_ITEMS:
      return {
        ...state,
        page: {
          ...state.page,
          products: action.payload,
        },
      };
    case SET_NAVBAR_ACTIVEITEM:
      return {
        ...state,
        navBar: {
          activeItem: action.payload,
        },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    "example"
  );
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {" "}
      {props.children}{" "}
    </StoreContext.Provider>
  );
}
