const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

/*Sign up form validation
$("#form2").validate({
    rules:{
        name:{
            minlength: 2
        }
    },

    email:{
        email: true
    },
    messages: {
        name:{
            required: "Please enter your name",
            minlength: "Name should be atleast two characters"
        },
        email: "Please enter your email",
        password: "Please enter your password"
      },

    submitHandler: function(form) {
      form.submit();
    }
   });
  
*/
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
                window.location("../test-login.html")
            } else {
                console.log(name,password)
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


