const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

//Sign up form validation
$(document).ready(function () {
    $("#btn").click(function () {
        var name = $("#name2").val();
        var email = $("#email2").val();
        var pass = $("#password2").val();

        if (name.length == "") {
            $("#p1").text("Please enter your name");
            $("#name").focus();
            return false;
        } else if (email.length == "") {
            $("#p2").text("Please enter your email address");
            $("#email").focus();
            return false;
        } else if (pass.length == "") {
            $("#p3").text("Please enter your password");
            $("#Password").focus();
            return false;
        } else {
            var con = confirm("Proceed to the home page?");
            if (con == true) {
                alert("Welcome to our Marirkiti Greens website");
                window.location("../test-login.html");
                return true;
            } else {
                return false;
            }
        }
    });

});



//Local storage
$(document).ready(function () {
    function createUser() {
        let name = $("#name2").val()
        let email = $("#email2").val()
        let password = $("#password2").val()
        let user = {
            "name": name,
            "email": email,
            "password": password
        }
        localStorage.setItem("user", JSON.stringify(user))
    }

    function getUser() {
        if (localStorage.getItem("user")) {
            let user = JSON.parse(localStorage.getItem("user"))
            let name = $(".name").val()
            let password = $(".pass").val()

            if (name == user.name & password == user.password) {
                alert("Logged In")
                // window.location("../test-login.html")
            } else {
                console.log(name, password)
                console.log(user)
                alert("Inavalid Email/Password")
                return
            }


        }
        alert("Create account first!")
    }
    $("#btn-login").click(function () {
        getUser()
    })
    $("#btn").click(function () {
        createUser()
        alert("Registered successfully")
    })
})


//On log in
function pageRedirect() {
    window.location.href = "https://www.tutorialrepublic.com/";
}