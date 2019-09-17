//alert("YARP");

var myAppName = " index";

document.getElementById('myclick').addEventListener('click', theFunc);
document.getElementById('anonButton').addEventListener('dblclick', theFunc);

function theFunc(){
    document.getElementById('greet').innerHTML = "Hello world! " + myAppName;
}

function greetings() {
    //document.write("Hello world! " + myName + myAppName);
    document.getElementById('greet').innerHTML = "Hello world! " + myAppName;
}

function anObject(theObj) {
    document.getElementById('greet').innerHTML = theObj;
}
