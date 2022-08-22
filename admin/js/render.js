// controller

// in thông tin ra board
export function renderToTable(arrayData) {
  let contentHTML = "";
  arrayData.forEach((item) => {
    let { id, name, price, screen, backCamera, frontCamera, img, desc, type } =
      item;
    var contentTr = /*html*/ `
    <tr>
    <th scope="row">${id}</th>
    <td>${name}</td>
    <td>${price}</td>
    <td>${screen}</td>
    <td>${backCamera}</td>
    <td>${frontCamera}</td>
    <td> <img src='${img}'/></td>
    <td>${desc}</td>
    <td>${type}</td>
    <td>
    <button onclick="removeItem('${id}')" class="btn btn-danger my-1">Xoá</button>
    <button onclick="showItem('${id}')" data-toggle="modal" data-target="#exampleModal" class="btn btn-warning my-1">Sửa</button>
    </td>
    </tr>
    `;
    contentHTML += contentTr;
  });
  document.getElementById("tbody__phoneList").innerHTML = contentHTML;
}

// in thông tin len modal cho việc edit
export function renderToModal(item) {
  let { name, price, screen, backCamera, frontCamera, img, desc, type } = item;
  document.getElementById("nameInput").value = name;
  document.getElementById("priceInput").value = price;
  document.getElementById("imgInput").value = img;
  document.getElementById("screenInput").value = screen;
  document.getElementById("backCameraInput").value = backCamera;
  document.getElementById("frontCameraInput").value = frontCamera;
  document.getElementById("descInput").value = desc;
  document.getElementById("typeInput").value = type;
}

// hàm reset modal
export function resetForm() {
  document.getElementById("nameInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("imgInput").value = "";
  document.getElementById("screenInput").value = "";
  document.getElementById("backCameraInput").value = "";
  document.getElementById("frontCameraInput").value = "";
  document.getElementById("descInput").value = "";
  document.getElementById("typeInput").value = "";
}
