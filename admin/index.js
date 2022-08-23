// console.log("dương cu te");

import {
  addItemAPI,
  layAPIData,
  layAPIDataID,
  editItemAPI,
  removetemAPI,
} from "./js/axiosMethod.js";
import { getInputFromForm } from "./js/getInfo.js";
import { removeTb, resetForm } from "./js/render.js";
import { isValid } from "./models/phone.validator.js";

// get data
layAPIData();
// thêm item
document.getElementById("btnShowModal").onclick = function () {
  document.getElementById("btnAdd").style.display = "flex";
  document.getElementById("btnUpdate").style.display = "none";
  resetForm();
};

// function myfunction() {}

document.getElementById("btnAdd").onclick = function addItem() {
  document.getElementById("btnAdd").setAttribute("data-dismiss", "");
  let item = getInputFromForm();

  if (isValid(item)) {
    addItemAPI(item);
    document.getElementById("btnAdd").setAttribute("data-dismiss", "modal");
  }
  // layAPIData();
};

// xoá item
function removeItem(id) {
  removetemAPI(id);
  // layAPIData();
}
window.removeItem = removeItem;

// sửa item
function showItem(id) {
  document.getElementById("btnAdd").style.display = "none";
  document.getElementById("btnUpdate").style.display = "flex";

  layAPIDataID(id);

  document.getElementById(
    "btnUpdate"
  ).innerHTML = /*html*/ `<button onclick="updateItem('${id}')" class="btn btn-primary">Cập nhập</button>`;
  removeTb();
}
window.showItem = showItem;

function updateItem(id) {
  document.getElementById("btnUpdate").setAttribute("data-dismiss", "");
  let data = getInputFromForm();
  console.log("isValid(data): ", isValid(data));

  if (isValid(data)) {
    editItemAPI(id, data);
    document.getElementById("btnUpdate").setAttribute("data-dismiss", "modal");
  }
}
window.updateItem = updateItem;

// tìm kiếm
