var productName = document.getElementById("productName");

var productDesc = document.getElementById("productDesc");

var productPrice = document.getElementById("productPrice");

var productCompany = document.getElementById("productCompany");

var mybtn = document.getElementById("mybtn");

var row = document.getElementById("products");

var globaleindex;

var toggle = false;

var products = [];

var x = localStorage.getItem("products");
products = JSON.parse(x);
if (products !== null) {
  show();
}

mybtn.onclick = function () {
  if (toggle === false) {
    add();
  } else {
    updateData();
  }
};

function add() {
  var product = {
    name: productName.value,
    desc: productDesc.value,
    price: productPrice.value,
    company: productCompany.value,
  };
  products.push(product);

  var temp = JSON.stringify(products);
  localStorage.setItem("products", temp);
  show();
}

function show() {
  // row.innerHTML = "test";
  col = "";
  for (var i = 0; i < products.length; i++) {
    col +=
      `<div class="card m-3 bg-info text-center" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">` +
      products[i].name +
      `</h5>
      <p class="card-text">` +
      products[i].desc +
      `</p>
      <p class="card-text">$` +
      products[i].price +
      `</p>
      <p class="card-text">` +
      products[i].company +
      `</p>
      <a href="#" class="btn btn-danger" onclick="Delete(` +
      i +
      `)">Delete</a>
      <button type = "button" class="btn btn-warning" onclick="ret(` +
      i +
      `)">Update</button>
    </div>
  </div>`;
  }
  // console.log(col);
  row.innerHTML = col;
}

function Delete(index) {
  // window.alert(index);
  products.splice(index, 1);
  show();
}

function ret(index) {
  toggle = true;
  productName.value = products[index].name;
  productDesc.value = products[index].desc;
  productPrice.value = products[index].price;
  productCompany.value = products[index].company;
  globaleindex = index;
  mybtn.innerHTML = "Update";
}

function updateData() {
  products[globaleindex].name = productName.value;
  products[globaleindex].desc = productDesc.value;
  products[globaleindex].company = productCompany.value;
  products[globaleindex].price = productPrice.value;
  show();
  toggle = false;
  mybtn.innerHTML = "Supmit";
}
