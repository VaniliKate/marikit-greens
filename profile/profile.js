// get data from local storage

function myProfile() {
  var profileName = localStorage.getItem("name");
  let profileEmail = localStorage.getItem("email");
  profileName = JSON.parse(profileName);

  profileEmail = JSON.parse(profileEmail);
}
$(document).ready(function () {});

// getData = ()=> {
//     let data = local.getItem('user-info');
//     // get it as object
//     data = JSON.parse(data);
// document.write
