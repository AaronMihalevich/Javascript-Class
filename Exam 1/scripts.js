// Aaron Mihalevich
// Exam 1 : CIS-131
// 09/19/2019

var mj = 9.99;
var md = 10.99;
var rmh = 12.99;
var dd = 9.99;
var dl = 11.99;
var la = 4.20;
var tax = 1.076;



// ****************my pizza array*********************
var pizza = ["The Mary Jane", "The Magic Dragon", "The Rocky Mountain High",
                "The Doobie Doo", "The Devil's Lettuce(Vegetarian)", "The Labrador"]




// ************type of pizza options************
var p=0;
for(p=0; p < pizza.length; p++)
{
  document.getElementById('pizzaOptions').innerHTML +=
  "<option value='0'>" + pizza[p] + "</option>"
}


// ************Number of pizza options************

var i=0;
for(i=1; i < 11; i++)
{
    document.getElementById('numOptions').innerHTML +=
    "<option value='1'>" + i + "</option>"
}


// ************click button************
//document.getElementById('click').addEventListener('click', vals());


// ***********error messages***********

function vals(form){

  var isValid = true;
  if (form.name.value == "")
  {
    isValid = false;
    document.getElementById('nameErr').innerHTML = "<h3 class='error'>" + "Yo, man! You gotta put your name in man!" + "</h3>"
    form.name.style.backgroundColor = "orange";

  }

  if (form.phone.value == "")
  {
    isValid = false;
    document.getElementById('phoneErr').innerHTML = "<h3 class='error'>" + "Man, that's not a real number man.... is it?" + "</h3>"
    form.phone.style.backgroundColor = "orange";
  }

  return isValid;
}

/////////////////////////////////////////////////////////
// ******************Output section**********************
/////////////////////////////////////////////////////////

console.log(pizza);
console.log(i);
console.log(p);
