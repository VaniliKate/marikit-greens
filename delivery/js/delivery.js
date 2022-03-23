$(document).ready(function(){

  $("#deliver").submit(function(event){
    event.preventDefault();
    getItDelivered();
});
  
  $(".form").submit(function(){
    deliveryConfirmation();
  });
  
  $("#pickup").submit(function(){
    pickUp();
  });
});

function getItDelivered() {
    $(".deliversection").show();
    $("#pickup").hide();
    $("#deliver").hide();
    $("#deliveryoptions").hide();
    $(".options").hide();

  }

function deliveryConfirmation() {
  //get values from the form

  $("#pickup").hide();
  $("#deliver").hide();
  $("#deliveryoptions").hide();
  $(".deliversection").hide();

  let firstName = $("#firstname").val();
  let lastName = $("#lastname").val();
  let phoneNumber = $("#phonenumber").val();
  let location = $("#location").val();
 
  $(".delivery-feedback-image").show();
  $(".delivery-feedback").text("Thank you " + firstName + " " + lastName + " for shopping with Marikiti Greens. Your greens will be delivered to " + location + ". For any further communication, we shall reach you through this number " + "+254787878787");
  $(".delivery-feedback").show();

}

function pickUp() {
  $(".options").hide();
  $("#pickup").hide();
  $("#deliver").hide();
  $("#deliveryoptions").hide();
  $(".deliversection").hide();

  $(".pickup-feedback").show();
}

