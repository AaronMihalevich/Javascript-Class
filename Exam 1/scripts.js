// Aaron Mihalevich
// Exam 1 : CIS-131
// 09/19/2019





// ****************my pizza array*********************
var pizza = ["The Mary Jane", "The Magic Dragon", "The Rocky Mountain High",
  "The Doobie Doo", "The Devils Lettuce(Vegetarian)", "The Labrador"
]





// ************type of pizza options************
var p = 0;
for (p = 0; p < pizza.length; p++) {
  document.getElementById('pizzaOptions').innerHTML +=
    "<option value='" + pizza[p] + "'>" + pizza[p] + "</option>"
}


// ************Number of pizza options************

var i = 0;
for (i = 1; i < 11; i++) {
  document.getElementById('numOptions').innerHTML +=
    "<option value=" + i + ">" + i + "</option>"
}


//******************Output section**********************

document.getElementById('myclick').addEventListener('click', function () 
{
  var theName = document.theForm.name.value;
  var thePhone = document.theForm.phone.value;
  var thePizza = document.theForm.pizza.value;
  var theNumber = document.theForm.number.value;
  var thePrice = theNumber * 10;
  var tax = (thePrice * 1.076) - thePrice;
  var taxPrice = tax.toFixed(2);
  var total = thePrice * 1.076
  var totalPrice = total.toFixed(2);

  document.getElementById('order').innerHTML =
    "<div class='orderDets'><img src='cheechs_thanks.png' alt='logo'></div>" +
    "<h2>Hey man, thank you for your order!</h2> <p class='output' id='orderName'>" + theName + "</p>" +
    "<h2>Yo man, we'll give you a call at:</h2> <p class='output' id='orderNumber'>" + thePhone + "</p>" +
    "<h2>Hey, great choice man! You ordered the:</h2> <p class='output' id='pizzaType'>" + thePizza + "</p>" +
    "<h2>Hey man, we'll start BAKING " + theNumber + " pizza(s)</h2>" +
    "<h2 class='total'>Man, the total on that is going to be:</h2>" +
    "<p  class='output'>" + "Your subtotal: $" + thePrice + "</p>" +
    "<p id='subTotal' class='output'>Plus tax: $" + taxPrice +"</p>" +
    "<h4 id='subTotal'>Man, your total is: S" + totalPrice + "</h4>";
});