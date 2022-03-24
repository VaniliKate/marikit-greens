$(document).ready(function () {
  function getProducts() {
    if (localStorage.getItem("products")) {
      console.log("in run");
      let products = JSON.parse(localStorage.getItem("products"));
      return products;
    }
    localStorage.setItem("products", JSON.stringify([]));
    let products = JSON.parse(
      localStorage.getItem("products", JSON.stringify([]))
    );
    return products;
  }
  function getCategories() {
    if (localStorage.getItem("categories")) {
      console.log("in run");
      let categories = JSON.parse(localStorage.getItem("categories"));
      return categories;
    }
    localStorage.setItem("categories", JSON.stringify([]));
    let categories = JSON.parse(
      localStorage.getItem("categories", JSON.stringify([]))
    );
    return categories;
  }

  let categories = getCategories();
  let products = getProducts();
  categories.forEach((category) => {
    $(".product-items").append(
      `<h2 style="color:green;" id='${category.name}'>${category.name}</h2>`
    );
    products.forEach((product) => {
      if (product.category == category.name) {
        $(".product-items").append(`
                <div style="align-items-center;margin:0px;display:flex;flex-direction:column;align-items:center;border:1px solid green; width:300px;padding:10px;margin:10px;border-radius:15px;">
                <img src='../admin/images/${product.image}' width="70%" style="border-radius:10px;margin-bottom:10px;" />
                <h5>${product.name}<h5>
                <h5>Ksh. ${product.price}<h5>
                <button type="button" class="btn" style="background-color:#abeb45;">Add To Cart</button>
                </div>`);
      }
    });
  });
});
