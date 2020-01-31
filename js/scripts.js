// Business Logic --------------------------------------
function Pizza(){
  this.size = "";
  this.toppings = [];
  this.sauce = "";
}

Pizza.prototype.calculateSizeCost = function(){

}

Pizza.prototype.calculateToppingCost = function(){

}

Pizza.prototype.calculateSauceCost = function(){

}

Pizza.prototype.calculateTotal = function(){
  var total = this.calculateSizeCost();
  total += this.calculateToppingCost();
  total += this.calculateSauceCost();
  return total;
}

// User Interface Logic -------------------------------
var pizza = new Pizza();


// User Interface
$(document).ready(function(){
  $("#orderButton").click(function(){
    $("#homeDisplay").hide();
    $("#orderDisplay").show();
    $("#costDisplay").hide();
    $("#confirmDisplay").hide();

    pizza = new Pizza();
  });

  $("#costButton").click(function(){
    $("#homeDisplay").hide();
    $("#orderDisplay").hide();
    $("#costDisplay").show();
    $("#confirmDisplay").hide();
  });

  $("#confirmButton").click(function(){
    $("#homeDisplay").hide();
    $("#orderDisplay").hide();
    $("#costDisplay").hide();
    $("#confirmDisplay").show();
  });

  $("#returnHomeButton").click(function(){
    $("#homeDisplay").show();
    $("#orderDisplay").hide();
    $("#costDisplay").hide();
    $("#confirmDisplay").hide();
  });

});