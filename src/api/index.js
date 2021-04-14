import product from "../json/products.json";
import mahjong from "../json/mahjong.json";

export const getJSON = (url) => {
    switch (url) {
      case "/product/tables":
        return product;
      case "/product/mahjong":
        return mahjong;
      default:
        return product;
    }
  };