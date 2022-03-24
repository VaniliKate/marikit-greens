function myProfile(){
    var profileName = localStorage.getItem('name'); 
    var profileEmail= localStorage.getItem('email');

    event.preventDefault();
    document.getElementsByClassName("nametext").innerHTML = 'name';
    document.getElementsByClassName("emailtext").innerHTML = 'email';
    
}








