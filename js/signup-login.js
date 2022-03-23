const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

//Sign up form validation and saving to local storage
function store(){

    var name = document.getElementById('name2');
    var email = document.getElementById('email2');
    var pw = document.getElementById('password2');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(email.value.length == 0){
        alert('Please fill in email');

    }else if(name.value.length == 0 && pw.value.length == 0 && email.value.lenth == 0){
        alert('Please fill in name, password and email');

    }else if(pw.value.length > 24){
        alert('Max of 24');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number to your password');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter to your password');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lowercase letter to your password');

    }else{
        JSON.stringify(localStorage.setItem('name', name.value));
        JSON.stringify(localStorage.setItem('email', email.value));
        JSON.stringify(localStorage.setItem('pw', pw.value));
        alert('Your account has been created');
        window.location("../test-login.html");
    }
}

//checking
function check(){
    var storedName = JSON.parse(localStorage.getItem('name'));
    var storedPw = JSON.parse(localStorage.getItem('pw'));
    
    var userName = document.getElementById('name');
    var userPw = document.getElementById('pass');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}


//google sign in
$('#google-btn').on('click', function() {
	// Initialize with your OAuth.io app public key
	OAuth.initialize('txp2rKYpuKZXaaYC5kB-m13KnVE');
  OAuth.popup('google').then(google => {
    console.log('google:',google);
    // Retrieves user data from oauth provider
    // Prompts 'welcome' message with User's email on successful login
    // #me() is a convenient method to retrieve user data without requiring you
    // to know which OAuth provider url to call
    google.me().then(data => {
      console.log('me data:', data);
      alert('Google says your email is:' + data.email + ".\nView browser 'Console Log' for more details");
	  });
    // Retrieves user data from OAuth provider by using #get() and
    // OAuth provider url
    google.get('https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,occupations,organizations,addresses,locales').then(data => {
      console.log('self data:', data);
    })
	});
})

//facebook sign in
$('#fcbk-btn').on('click', function() {
	// Initialize with your OAuth.io app public key
	OAuth.initialize('HwAr2OtSxRgEEnO2-JnYjsuA3tc');
  // Use popup for oauth
  OAuth.popup('facebook').then(facebook => {
    console.log('facebook:',facebook);
    // Prompts 'welcome' message with User's email on successful login
    // #me() is a convenient method to retrieve user data without requiring you
    // to know which OAuth provider url to call
    facebook.me().then(data => {
      console.log('me data:', data);
      alert('Facebook says your email is:' + data.email + ".\nView browser 'Console Log' for more details");
	  })
    // Retrieves user data from OAuth provider by using #get() and
    // OAuth provider url
    facebook.get('/v2.5/me?fields=name,first_name,last_name,email,gender,location,locale,work,languages,birthday,relationship_status,hometown,picture').then(data => {
      console.log('self data:', data);
      })
  });
})

/*Sign up form validation
$(document).ready(function () {
    $("#btn").click(function () {
        var name = $("#name2").val();
        var email = $("#email2").val();
        var pass = $("#password2").val();

        if (name.length < 5) {
            $("#p1").text("Please enter your name");
            $("#name").focus();
            return false;
        } else if (email.length < 9) {
            $("#p2").text("Please enter your email address");
            $("#email").focus();
            return false;
        } else if (pass.length < 5) {
            $("#p3").text("Please enter your password");
            $("#Password").focus();
            return false;
        } else {
            var con = confirm("Proceed to the home page?");
            if (con == true) {
                alert("Welcome to Marirkiti Greens website");
                window.location("../test-login.html");
                return true;
            } else {
                return false;
            }
        }
    });

});

//sign in form validation
$(document).ready(function () {
    $("#btn-login").click(function () {
        var email = $(".name").val();
        var pass = $(".pass").val();

        if (email.length < 9) {
            $("#p4").text("Please enter your email address");
            $(".name").focus();
            return false;
        } else if (pass.length < 5) {
            $("#p5").text("Please enter your password");
            $(".pass").focus();
            return false;
        } else {
            var move = confirm("Proceed to the home page?");
            if (move == true) {
                alert("Welcome to Marirkiti Greens website");
                window.location("../test-login.html");
                return true;
            } else {
                return false;
            }
        }
    });

});



/*Local storage
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
*/