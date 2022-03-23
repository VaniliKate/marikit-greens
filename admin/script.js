$(document).ready(function () {
  function getCategories() {
    if (localStorage.getItem("categories")) {
      console.log("in run");
      let categories = JSON.parse(localStorage.getItem("categories"));
      return categories;
    }
    let categories = JSON.parse(localStorage.getItem("categories"));
    return categories;
  }
  let categories = getCategories();
  categories.forEach((element) => {
    $(".category-list").append(
      `<tr>
        <th scope="row">${element.id}</th>
        <td>${element.name}</td>
    </tr>`
    );
  });

  // $(".add-category").click(function () {
  //     let categoryName = $("#category-name").val()
  //     let categories = addItem(categoryName)
  //     console.log(categories)

  //     $(".category-list").append(`<tr>
  //               <th scope="row">${categoryId}</th>
  //               <td>${categoryName}</td>
  //             </tr>`);
  // })
});
