var timer = setInterval(ranNum, 3000);
var showNum = document.getElementById('timer');

function ranNum()
{
    showNum.innerHTML = Math.floor(Math.random() * 5);
}

//document.getElementById('val').addEventListener('click', val);



function vals(frm)
{
    var isValid = true;
    var phoneVal = /\d{3}[.-]\d{3}[.-]\d{4}/;
    if (frm.userName.value == "")
    {
        isValid = false;
        document.getElementById('err').innerHTML = "User Name is required";
        frm.userName.style.backgroundColor = "red";
    }

    if (frm.theEmail.value == "")
    {
        isValid = false;
        document.getElementById('err2').innerHTML = "Email is needed";
        frm.theEmail.style.backgroundColor = "orange";
    }

    if (frm.Phone.value == "")
    {
        isValid = false;
        document.getElementById('err3').innerHTML = "Phone# must be sumbited";
        frm.Phone.style.backgroundColor = "yellow";
    }

    return isValid;

}

function printQuery()
{
    var query = window.location.search.substring(1);
    var valPairs = query.split("&");
    for (var i = 0; i < valPairs.length; i++)
    {
        var pair = valPairs[i].split("=")
        document.write(`${pair[0]} gets ${pair[1]}<br>` )
    }
}

// ***************my string********************
var myString = "<option value=''>";
var myStringEnd = "</option>";

// *****************my product array*************************

var products = ["Wood", "Nails", "Hammer", "Saw", "Throwing Star"];
console.log(products.length);

var p=0;

for(p=0; p < products.length; p++){
    console.log(p)
    document.getElementById('pList').innerHTML += myString + products[p] + myStringEnd;
}

// ******************my number list*********************


var i=1;

for(i=1; i < 11; i++){
    console.log(i);
    document.getElementById('numList').innerHTML += myString + i + myStringEnd;

}
