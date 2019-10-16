var httpRequest = new XMLHttpRequest();
httpRequest.open("get","https://launchlibrary.net/1.4/launch/next/5");
httpRequest.send(null);
httpRequest.onreadystatechange = myFunction;

function myFunction()
{

}