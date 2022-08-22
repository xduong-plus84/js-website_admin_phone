// hàm lấy thông tin Input

import { Phone } from "../models/phone.modle.js";

export function getInputFromForm() {
  let name = document.getElementById("nameInput").value;
  let price = document.getElementById("priceInput").value;
  let img = document.getElementById("imgInput").value;
  let screen = document.getElementById("screenInput").value;
  let backCamera = document.getElementById("backCameraInput").value;
  let frontCamera = document.getElementById("frontCameraInput").value;
  let desc = document.getElementById("descInput").value;
  let type = document.getElementById("typeInput").value;
  return new Phone(
    name,
    price,
    img,
    screen,
    backCamera,
    frontCamera,
    desc,
    type
  );
}
