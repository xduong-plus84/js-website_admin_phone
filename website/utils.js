import { renderCart } from "./controler.js";
import {
  ITEMCARTLIST_LOCALSTORAGE,
  PRODUCTSLIST_LOCALSTORAGE,
} from "./index.js";
import { ItemCart } from "./model.js";

// loading
export function batLoading() {
  document.getElementById("loading").style.display = "flex";
}
export function tatLoading() {
  document.getElementById("loading").style.display = "none";
}

// Sidenav
export function openNav() {
  document.getElementById("cart").style.width = "100vw";
  document.getElementById("cart__content").style.display = "flex";
}
export function closeNav() {
  document.getElementById("cart").style.width = "0vw";
  document.getElementById("cart__content").style.display = "none";
}

// xoá item khỏi giỏ hàng
function xoaItemCart(id) {
  let index = itemCartList.findIndex((item) => item.product.id == id);
  console.log("itemCartList: ", itemCartList);
  console.log("index: ", index);

  itemCartList.splice(index, 1);
  renderCart(itemCartList);
}
window.xoaItemCart = xoaItemCart;

// hàm thêm item vào giỏ hàng
function isTrungSP(list, name) {
  const index = list.findIndex((item) => item.product.name === name);
  return index;
}
export function addCart(id) {
  productsList = JSON.parse(localStorage.getItem(PRODUCTSLIST_LOCALSTORAGE));
  if (JSON.parse(localStorage.getItem(ITEMCARTLIST_LOCALSTORAGE)) != null) {
    itemCartList = JSON.parse(localStorage.getItem(ITEMCARTLIST_LOCALSTORAGE));
  }
  let index = productsList.findIndex((item) => item.id == id);
  if (isTrungSP(itemCartList, productsList[index].name) != -1) {
    itemCartList[isTrungSP(itemCartList, productsList[index].name)].quantity++;
  } else {
    let itemCart = new ItemCart(productsList[index], 1);
    itemCartList.push(itemCart);
  }

  renderCart(itemCartList);
}
window.addCart = addCart;

// change quantity item
// cộng
function quantitySub(id) {
  let index = itemCartList.findIndex((item) => item.product.id == id);
  if (itemCartList[index].quantity > 0) {
    itemCartList[index].quantity--;
  }
  renderCart(itemCartList);
}
window.quantitySub = quantitySub;
// trừ
function quantityPlus(id) {
  let index = itemCartList.findIndex((item) => item.product.id == id);
  itemCartList[index].quantity++;
  renderCart(itemCartList);
}
window.quantityPlus = quantityPlus;
