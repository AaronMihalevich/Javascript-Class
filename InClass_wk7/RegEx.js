var string = "Hello to you";
console.log(string.length)

console.log(string.charAt(4))

for(var i = 0; i < string.length; i++)
{
    //console.log(string[i]);
    console.log(string.charAt(i));
}

//**********three use cases for RegEx */

//**************VALIDATION */
var phoneNumber = "573-690-2245";
var regex = /\d{3}[.-]\d{3}[.-]\d{4}/
var isValidNumber = regex.test(phoneNumber);
console.log(isValidNumber);

//***********************EXTRACTION */
var address = "1520 E Lombard St, Springfield, MO 65802"
var stateZip = address.match(/[A-Z]+\s\d{5}/g)
console.log(stateZip);

//**********************REPLACE */
name = "Aaron does Javascript, Hey aaron"
var replaceName = name.replace(/Aaron/g, "YoYo");
console.log(replaceName);