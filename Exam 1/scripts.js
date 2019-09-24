// Aaron Mihalevich
// Exam 1 : CIS-131
// 09/19/2019





// ****************my pizza array*********************
var pizza = ["The Mary Jane", "The Magic Dragon", "The Rocky Mountain High",
  "The Doobie Doo", "The Devil's Lettuce(Vegetarian)", "The Labrador"
]





// ************type of pizza options************
var p = 0;
for (p = 0; p < pizza.length; p++) {
  document.getElementById('pizzaOptions').innerHTML +=
    "<option value=''>" + pizza[p] + "</option>"
}


// ************Number of pizza options************

var i = 0;
for (i = 1; i < 11; i++) {
  document.getElementById('numOptions').innerHTML +=
    "<option value=''>" + i + "</option>"
}


// ************click button************
//document.getElementById('click').addEventListener('click', vals());


// ***********error messages***********

// function vals(frm) {

//   var isValid = true;
//   if (frm.name.value == "") {
//     isValid = false;
//     document.getElementById('nameErr').innerHTML = "<h3 class='error'>" + "Yo, man! You gotta put your name in man!" + "</h3>"
//     frm.name.style.backgroundColor = "orange";

//   }

//   if (frm.phone.value == "") {
//     isValid = false;
//     document.getElementById('phoneErr').innerHTML = "<h3 class='error'>" + "Man, that's not a real number man.... is it?" + "</h3>"
//     frm.phone.style.backgroundColor = "orange";
//   }

//   return isValid;
// }


//******************Output section**********************

document.getElementById('myclick').addEventListener('click', order())

function order()
{
  var theOrder = document.getElementById('myForm');
  var code = "";

  console.log(theOrder.elements)

  // document.getElementById('order').innerHTML = 
  //   "<h2>Hey man, thank you for your order!</h2> <p class='output' id='orderName'></p>" +
  //   "<h2>Yo man, we'll give you a call at:</h2> <p class='output' id='orderNumber'></p>" +
  //   "<h2>Hey, great choice man! You ordered the:</h2> <p class='output' id='pizzaType'></p>" +
  //   "<h2>Hey man, we'll start BAKING " + numValue[1] + " pizza(s)</h2>" +
  //   "<h2 class='total'>Man, the total on that is going to be:</h2> <h4 id='subTotal'></h4>"



}



// **************order output*****************
// document.getElementById('myclick').addEventListener('click', function()
// {
//   var query = window.location.search.substring(1);
//   var pairs = query.split("&");
//   var nameValue = pairs[0].split("=");
//   var phoneValue = pairs[1].split("=");
//   var pizzaValue = pairs[2].split("=");
//   var numValue = pairs[3].split("=");
//   var pizzaName = pizzaValue[1];
  
//   console.log(phoneValue[1])
// // ****************order details***************
//   document.getElementById('order').innerHTML = 
//     "<h2>Hey man, thank you for your order!</h2> <p class='output' id='orderName'></p>" +
//     "<h2>Yo man, we'll give you a call at:</h2> <p class='output' id='orderNumber'></p>" +
//     "<h2>Hey, great choice man! You ordered the:</h2> <p class='output' id='pizzaType'></p>" +
//     "<h2>Hey man, we'll start BAKING " + numValue[1] + " pizza(s)</h2>" +
//     "<h2 class='total'>Man, the total on that is going to be:</h2> <h4 id='subTotal'></h4>"

//   document.getElementById('orderName').innerHTML = nameValue[1];
//   document.getElementById('orderNumber').innerHTML = phoneValue[1];
//   document.getElementById('pizzaType').innerHTML = pizza[pizzaName]; 

  

//   // *****************order subtotal*****************

//   document.getElementById('subTotal').innerHTML = "$" + 10 * (numValue[1]);

// });






// function printQuery()
// {
//     var query = window.location.search.substring(1);
//     var valPairs = query.split("&");
//     for (var i = 0; i < valPairs.length; i++)
//     {
//         var pair = valPairs[i].split("=")
//         document.getElementById('order').innerHTML += (`${pair[0]} gets ${pair[1]}<br>` )
//     }
// }


console.log(pizza)
console.log(p);