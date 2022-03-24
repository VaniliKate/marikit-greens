$(document).ready(function () {
    let isLoggedIn = localStorage.getItem("name");
    console.log(isLoggedIn)
    console.log(window.location)
    if (isLoggedIn) {
        $(".hide-auth").hide()
    }
})