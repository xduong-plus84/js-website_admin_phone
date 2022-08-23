// console.log("dương cute lạc lối");
const BASE_URL = "https://62db6ca0d1d97b9e0c4f3334.mockapi.io";

export const PRODUCTSLIST_LOCALSTORAGE = "PRODUCTSLIST";
export const ITEMCARTLIST_LOCALSTORAGE = "ITEMCARTLIST";

import { renderCart, renderData } from "./controler.js";
// import { layData } from "./model.js";
import { batLoading, closeNav, openNav, tatLoading } from "./utils.js";

let productsList = [];
let itemCartList = [];

function layData() {
  batLoading();
  axios({
    url: `${BASE_URL}/Products`,
    method: "GET",
  })
    .then(function (res) {
      // renderData(res.data);
      // xử lý data lấy từ api
      localStorage.setItem(PRODUCTSLIST_LOCALSTORAGE, JSON.stringify(res.data));

      productsList = JSON.parse(
        localStorage.getItem(PRODUCTSLIST_LOCALSTORAGE)
      );

      renderData(productsList);

      // xủ lý data gio hang
      let itemCartListJson = localStorage.getItem(ITEMCARTLIST_LOCALSTORAGE);
      if (itemCartListJson != null) {
        console.log("get");
        itemCartList = JSON.parse(itemCartListJson);
        renderCart(itemCartList);
      } else {
        console.log("no get");
        // renderCart(itemCartList);
      }
      tatLoading();
    })
    .catch(function (err) {
      console.log("err: ", err);
      tatLoading();
    });
}
layData();

let itemCartListJson = localStorage.getItem(ITEMCARTLIST_LOCALSTORAGE);
if (itemCartListJson != null) {
  console.log("get");
  itemCartList = JSON.parse(itemCartListJson);
  renderCart(itemCartList);
} else {
  console.log("no get");
  // renderCart(itemCartList);
}
// console.log("itemCartList: ", itemCartList);

// productsList = JSON.parse(localStorage.getItem(PRODUCTSLIST_LOCALSTORAGE));

window.itemCartList = itemCartList;

// open cart
document.getElementById("btn__cart").addEventListener("click", openNav);
// close cart
document.getElementById("cart__bg").addEventListener("click", closeNav);
document.getElementById("closeNav").addEventListener("click", closeNav);

// filter
document.getElementById("type").onchange = function () {
  let type = document.getElementById("type").value;
  if (type != 0) {
    renderData(productsList.filter((item) => item.type === type));
  } else {
    renderData(productsList);
  }
};
window.productsList = productsList;

// purchase
document.getElementById("btn__purchase").onclick = function () {
  // itemCartList = [];
  itemCartList.splice(0, itemCartList.length);
  renderCart(itemCartList);
};
document.getElementById("btn__clear").onclick = function () {
  itemCartList = [];
  renderCart(itemCartList);
};

// reset gio hang
// const clear = document.querySelectorAll(".clear");
// for (let i = 0; i < clear.length; i++) {
//   clear[i].addEventListener("click", function () {
//     itemCartList.splice(0, itemCartList.length);
//     renderCart(itemCartList);
//     console.log("itemCartList: ", itemCartList);
//   });
// }

/*








*/
// var object1 = {
//   apple: 0,
//   banana: { weight: 52, price: 100 },
//   cherry: 97,
// };
// var object2 = {
//   banana: { price: 200 },
//   durian: 100,
// };

// // Merge object2 into object1
// let data1 = {
//   product: {
//     name: "Iphone 11",
//     price: "1600",
//     screen: "5.4 inch",
//     backCamera: "Chính 12 MP & Phụ 64 MP, 12 MP",
//     frontCamera: "32 MP",
//     img: "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-pro-max-256gb-didongviet_23.jpg",
//     desc: "Thiết kế đột phá, màn hình tuyệt đỉnh",
//     type: "iphone",
//   },
//   quatity: 4,
// };
// let data2 = {
//   product: {
//     name: "Samsung Galaxy M22",
//     price: "1000",
//     screen: "7.0 inch",
//     backCamera: "Chính 12 MP & Phụ 64 MP, 12 MP",
//     frontCamera: " 32 MP",
//     img: "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
//     desc: "Thiết kế mang tính đột phá",
//     type: "Samsung",
//   },
//   quatity: 1,
// };
// let list = [];

// list.push(data1);
// // console.log("list: ", list);
// list.push(data2);
// // console.log("list: ", list);
