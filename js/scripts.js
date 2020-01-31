// Business Logic --------------------------------------
function Pizza(){
  this.name = "";
  this.size = "";
  this.toppings = [];
  this.sauce = "";
  this.itemCosts = [];
}

Pizza.prototype.calculateSizeCost = function(){
  if (this.size === "Small"){
    this.itemCosts.push(4);
    return 4;
  }else if (this.size === "Medium"){
    this.itemCosts.push(6);
    return 6;
  }else if (this.size === "Large"){
    this.itemCosts.push(8);
    return 8;
  } else if (this.size === "XLarge"){
    this.itemCosts.push(10);
    return 10;
  }
}

Pizza.prototype.calculateToppingCost = function(){
  var toppingTotal = 0;
  if (this.toppings.length >0){
    for(var i=0; i<this.toppings.length; i++){
      if(this.toppings[i] === "cheese"){
        // Not charged for cheese
        this.itemCosts.push(0);
      }else {
        toppingTotal = toppingTotal +2;
        this.itemCosts.push(2);
      }
    }
  } 
  this.itemCosts.push(toppingTotal);
  return toppingTotal;
}

Pizza.prototype.calculateSauceCost = function(){
  if (this.sauce === "white"){
    this.itemCosts.push(1);
    return 1;
  }else{
    this.itemCosts.push(0);
    return 0;
  }
}

Pizza.prototype.calculateTotal = function(){
  var total = this.calculateSizeCost();
  console.log("base total",total);
  total += this.calculateToppingCost();
  total += this.calculateSauceCost();
  console.log("total",total);
  this.itemCosts.push(total);
  console.log("total prices",this.itemCosts);
  return total;
}

// User Interface Logic -------------------------------
var pizza = new Pizza();

function getPizzaToppings(checked){
  if(checked.length>0){
    for(var i=0; i<checked.length; i++){
      pizza.toppings.push(checked[i].value);
    }
  } else {
    alert("No toppings chosen. Will default to only cheese.");
  }
}

function displayOrder(){
  $("#orderName").append(pizza.name);
  $("#showSize").text(pizza.size);
  displayToppings();
  $("#showSauce").text(pizza.sauce);
}

function displayToppings(){
  var toppingsListItems = "";
  if (pizza.toppings.length>0){
    pizza.toppings.forEach(function(topping){
      toppingsListItems += "<li>" + topping + "</li>";
    });
  }else {
    toppingsListItems = "<li>Cheese</li>";
  }
  $("#toppingList").html(toppingsListItems);
}

function displayPrices(total){
  var costIndex = 0;
  var toppingListCosts = "";
  $("#sizeTotal").text("$" + pizza.itemCosts[costIndex]);

  if(pizza.toppings.length>0){
    for(var j=0; j<pizza.toppings.length; j++){
      costIndex++;
      toppingListCosts += "<li>$" + pizza.itemCosts[costIndex] + "</li> ";
    }
  }else {
    toppingListCosts = "<li>$0</li> ";
  }
  $("#toppingCosts").html(toppingListCosts);
  costIndex++;
  $("#toppingTotal").text("$" +pizza.itemCosts[costIndex]);
  costIndex++;
  $("#sauceTotal").text("$" +pizza.itemCosts[costIndex]);
  costIndex++;
  $("#showTotal").append("$" +pizza.itemCosts[costIndex]);
  
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
    getPizzaToppings(checkedToppings);
    console.log(pizza.toppings);
    pizza.sauce = $("input:radio[name=sauce]:checked").val();

    displayOrder();
    var pizzaTotal = pizza.calculateTotal();
    displayPrices(pizzaTotal);

    
    
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