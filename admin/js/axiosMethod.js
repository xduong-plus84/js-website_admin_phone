import { batLoading, tatLoading } from "./utils.js";
import { renderToTable, renderToModal } from "./render.js";

const BASE_URL = "https://62db6ca0d1d97b9e0c4f3334.mockapi.io";

// GET ~ lây toàn bộ data về
export function layAPIData() {
  batLoading();
  axios({
    url: `${BASE_URL}/Products`,
    method: "GET",
  })
    .then(function (res) {
      renderToTable(res.data);
      tatLoading();
    })
    .catch(function (err) {
      // console.log("err: ", err);
      tatLoading();
    });
}

// GET:id ~ lấy data của id cụ thể
export function layAPIDataID(id) {
  batLoading();
  axios({
    url: `${BASE_URL}/Products/${id}`,
    method: "GET",
  })
    .then(function (res) {
      console.log("layAPIdata id");
      renderToModal(res.data);
      tatLoading();
    })
    .catch(function (err) {
      // console.log("err: ", err);
      tatLoading();
    });
}

// POST ~ thêm item
export function addItemAPI(item) {
  batLoading();
  axios({
    url: `${BASE_URL}/Products`,
    method: "POST",
    data: item,
  })
    .then(function (res) {
      layAPIData();
      tatLoading();
      console.log(res.data);
    })
    .catch(function (err) {
      tatLoading();
      console.log(err);
    });
}

// PUT:id ~ cập nhập data cho id cụ thể
export function editItemAPI(id, data) {
  batLoading();
  axios({
    url: `${BASE_URL}/Products/${id}`,
    method: "PUT",
    data: data,
  })
    .then(function (res) {
      console.log(res.data);
      layAPIData();
      tatLoading();
    })
    .catch(function (err) {
      console.log(err);
      tatLoading();
    });
}

// DELETE:id ~ xoá data của id cụ thể
export function removetemAPI(id) {
  batLoading();
  axios({
    url: `${BASE_URL}/Products/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      console.log("res.data: ", res.data);
      layAPIData();
      tatLoading();
    })
    .catch(function (err) {
      tatLoading();
      console.log(err);
    });
}
