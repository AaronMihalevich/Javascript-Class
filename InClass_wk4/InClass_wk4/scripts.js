//alert("YARP");

var myAppName = " index";

document.getElementById('myclick').addEventListener('click', theFunc);
document.getElementById('anonButton').addEventListener('dblclick', theFunc);

function theFunc(){
    alert("LOOK OUT!!!");
}

function greetings(myName) {
    //document.write("Hello world! " + myName + myAppName);
    document.getElementById('greet').innerHTML = "Hello world! " + myName + myAppName;
}

function anObject(theObj) {
    document.getElementById('greet').innerHTML = theObj;
}
