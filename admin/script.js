$(document).ready(function () {
  //get categories
  function getCategories() {
    if (localStorage.getItem("categories")) {
      console.log("in run");
      let categories = JSON.parse(localStorage.getItem("categories"));
      return categories;
    }
    let categories = JSON.parse(localStorage.getItem("categories"));
    return categories;
  }
  //Add category
  function addCategory(gategoryName) {
    if (localStorage.getItem("categories")) {
      console.log("in run");
      let categories = JSON.parse(localStorage.getItem("categories"));
      let itemId = categories.length + 1;
      let item = { id: itemId, name: gategoryName };
      localStorage.setItem("categories", JSON.stringify([...categories, item]));
      return item;
    }
    console.log("out run");
    localStorage.setItem("categories", JSON.stringify([]));
    let categories = JSON.parse(localStorage.getItem("categories"));
    let itemId = categories.length + 1;
    let item = { id: itemId, name: gategoryName };
    localStorage.setItem("categories", JSON.stringify([...categories, item]));
    return item;
  }

  let categories = getCategories();
  console.log(categories);
  //Append categories to table
  if (categories === null) {
    $(".category-list").append(
      `<tr id="no-cat">
        
        <td>There are no categories<td>
    </tr>`
    );
  } else {
    categories.forEach((element) => {
      $(".category-list").append(
        `<tr>
        <th scope="row">${element.id}</th>
        <td>${element.name}</td>
    </tr>`
      );
    });
  }
  //Append one category to table on add
  $(".add-category").click(function () {
      let categoryName = $("#category-name").val();
      if (!categoryName) {
          alert("Category name cannot be empty")
          return
      }
    let category = addCategory(categoryName);
    $("#no-cat").remove();
    $(".category-list").append(`<tr>
                <th scope="row">${category.id}</th>
                <td>${category.name}</td>
              </tr>`);
  });
});
