import { ITEMCARTLIST_LOCALSTORAGE } from "./index.js";

// render data ra màn hình
export function renderData(data) {
  var contentHTML = "";
  data.forEach((item) => {
    let { id, name, price, screen, backCamera, frontCamera, img, desc, type } =
      item;
    var contentCard = /*html*/ ` 
    <div class="card">
    <div class="card__top"><i class="fab fa-apple"></i> <em>In stock</em></div>
    <div class="card__img">
      <img src="${img}" />
    </div>
    <div class="card__detail">
      <div class="detail__name">
        <strong>${name}</strong>
        <button class="heart"><i class="fa fa-heart"></i></button>
      </div>
      <div class="detail__descrip">
        <h4>${desc}</h4>
        <ul>
          <li>
            <p>Màn hình</p>
            <div>${screen}</div>
          </li>
          <hr />
          <li>
            <p>Camera sau</p>
            <div>${backCamera}</div>
          </li>
          <hr />
          <li>
            <p>Camera trước</p>
            <div>${frontCamera}</div>
          </li>
        </ul>
      </div>
      <div class="detail__purchase">
        <span class="price">$ ${price}</span>
        <span class="btn-add" onclick="addCart('${id}')">Add <i class="fa fa-plus"></i></span>
      </div>
    </div>
  </div>
      `;
    contentHTML += contentCard;
  });
  document.getElementById("body_banner").innerHTML = contentHTML;
}

// render giỏ hàng

export function renderCart(data) {
  if (data.length == 0) {
    // document.getElementById("cart__empty").style.display = "block";
    // let contentHTML = "";

    document.getElementById(
      "cart__body"
    ).innerHTML = /*html*/ `<p id="cart__empty">Looks Like You Haven't Added Any Product In The Cart</p>`;
    // localStorage.setItem(ITEMCARTLIST_LOCALSTORAGE, JSON.stringify(data));
  } else {
    // document.getElementById("cart__empty").style.display = "none";
    let contentHTML = "";

    data.map((item) => {
      let {id, name, price, screen, backCamera, frontCamera, img, desc, type } =
        item.product;
      let contentItem = /*html*/ `
  <div class="cart__item">
    <div class="item__img">
      <img
        src="${img}"
      />
    </div>
    <strong>${name}</strong>
    <div class="item__amount">
      <button onclick="quantitySub('${id}')"><i class="fa fa-minus"></i></button>
      <span>${item.quantity}</span>
      <button onclick="quantityPlus('${id}')"><i class="fa fa-plus"></i></button>
    </div>
    <div class="item__price">$ ${price * item.quantity}</div>
    <button class="item__remove" onclick="xoaItemCart('${id}')">
      <i class="fa fa-trash"></i>
    </button>
  </div>
      `;
      contentHTML += contentItem;
    });

    document.getElementById("cart__body").innerHTML = contentHTML;
  }

  localStorage.setItem(ITEMCARTLIST_LOCALSTORAGE, JSON.stringify(data));

  // hiện tổng săn phẩm trong giỏ hàng
  let total__products = 0;
  data.map((item) => (total__products += item.quantity));
  document.getElementById("total__products").innerHTML = total__products;

  // hiện tổng số tiền trả
  let total__money = 0;
  data.map((item) => (total__money += item.quantity * item.product.price));
  document.getElementById("total__money").innerHTML =
    total__money.toLocaleString();
}
// window.renderCart = renderCart;
//
//
//
//
//
// filter viết chơi chơi à chứ đơn giản , chứ simple quá nên cho sang index luôn
// function filterByType(array, type) {
//   renderData(array.filter((item) => item.type === type));
// }
