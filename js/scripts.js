// Business Logic --------------------------------------
function Pizza(){
  this.name = "";
  this.size = "";
  this.toppings = [];
  this.sauce = "";
}

Pizza.prototype.calculateSizeCost = function(){
  if (this.size === "Small"){
    return 4;
  }else if (this.size === "Medium"){
    return 6;
  }else if (this.size === "Large"){
    return 8;
  } else if (this.size === "XLarge"){
    return 10;
  }
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

function getPizzaToppings(checked){
  if(checked.length>0){
    for(var i=0; i<checked.length; i++){
      pizza.toppings.push(checked[i].value);
      console.log(pizza.toppings);
    }
  } else {
    alert("No toppings chosen. Will default to only cheese.");
  }
}

function calculateCosts(){

}

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

    event.preventDefault();

    pizza.name = $("#name").val();
    pizza.size = $("#pizzaSize").val();
    //console.log(document.forms[0].toppings);
    var checkedToppings = $("input:checkbox[name=\"toppings\"]:checked");
    pizza.toppings = getPizzaToppings(checkedToppings);
    pizza.sauce = $("input:radio[name=sauce]:checked").val();

    calculateCosts();
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