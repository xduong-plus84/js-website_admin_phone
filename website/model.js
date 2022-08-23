// import { renderData } from "./controler.js";
// import { PRODUCTSLIST_LOCALSTORAGE } from "./index.js";

// import { batLoading, tatLoading } from "./utils.js";

// const BASE_URL = "https://62db6ca0d1d97b9e0c4f3334.mockapi.io";

// export function layData() {
//   batLoading();
//   axios({
//     url: `${BASE_URL}/Products`,
//     method: "GET",
//   })
//     .then(function (res) {
//       // renderData(res.data);
//       localStorage.setItem(PRODUCTSLIST_LOCALSTORAGE, JSON.stringify(res.data));
//       // productsList = JSON.parse(localStorage.getItem(PRODUCTSLIST_LOCALSTORAGE));
//       tatLoading();
//     })
//     .catch(function (err) {
//       console.log("err: ", err);
//       tatLoading();
//     });
// }

export function ItemCart(product, quantity) {
  this.product = product;
  this.quantity = quantity;
}

// export function ItemCartList(item) {
//   this.item = item;
// }
