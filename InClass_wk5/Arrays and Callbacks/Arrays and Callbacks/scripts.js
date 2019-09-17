

//Callbacks **************
// any function that uses a function as an argument
function greeting(greet)
{
  console.log(greet);
}

function createGreeting(firstName, varFunctionName)
{
  var createGreeting = "Hello " + firstName;
  //console.log(createGreeting);

  //greeting(createGreeting);

//  varFunctionName = greeting;
  varFunctionName(createGreeting);

}

//greeting('Kirsten');
createGreeting('Lilo', greeting);

/*****************************************/

//****************Timers *******************
var myTimer = setInterval(aFunction, 3000);

function aFunction(){
  alert("working");
}

document.getElementById('stop').addEventListener('click', function(){
  clearInterval(myTimer);
})

//*****************************************************

myDiv = document.getElementById('test');

var movies = ["Lilo and Stich", "Hawaii 5-0", "Jurassic Park"];

//store different types of elements
var elements = ["Hello", 7, { message: "Hi mom" }, true];

//obtaining an array size
myDiv.innerHTML = elements.length;

//to access an array we refer to an integer that points to each element in the array, beginning with zero
myDiv.innerHTML = (movies[0]); // Lilo and Stitch


//*******ITERATING OVER AN ARRAY *************/

myString = "<select id='movie'>";
//using the for loop
// for (i=0; i < movies.length; i++){
//     console.log(movies[i]);
//     myString += "<li>" + movies[i] + "</li>";
// }

//using the foreach() method
// takes as a parameter a function to apply to each element of the array
movies.forEach(function(el){
  //myString += "<li>" + el + "</li>";
  myString += `<option>${el}</option>`;
});

myString +=  "</select>";
myDiv.innerHTML = myString;
//get the value of the button
document.getElementById('getIt').addEventListener('click', function(){
  alert(document.getElementById('movie').value);
})



//*******MANIPULATING AN ARRAY *************/
// add to an array
movies.push("Jumangi");
console.log(movies);

//get the last element in the array
var last = movies.length -1;
console.log(movies[last]);

//add an element to the beginning unshift
movies.unshift("50 first dates");
console.log(movies);

//remove an element from the end
var aVar = movies.pop();
console.log(`${aVar}: ${movies}`);

//splice (index to start, number of elements to remove)
movies.splice(1,2) //removes 2 elements starting at position 1;
console.log(movies);
