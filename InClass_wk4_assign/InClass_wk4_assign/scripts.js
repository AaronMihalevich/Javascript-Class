// Fuction that swaps the thumbnail image for the large image
function imgSwap(theImg){
  document.getElementById('imgbox').src = theImg.src;
}


// Function swaps thumbnails on large image double click
// and adds button to bottom of page
document.getElementById('imgbox').addEventListener('dblclick', newImgs);
document.getElementById('imgbox').addEventListener('dblclick', swapButton);

function newImgs(){
  document.getElementById('myImg1').src = 'image5.jpg';
  document.getElementById('myImg2').src = 'image6.jpg';
  document.getElementById('myImg3').src = 'image7.jpg';
  document.getElementById('myImg4').src = 'image8.jpg';
}

function swapButton() {
  var element = document.getElementById("swapBack");
  element.classList.remove("hide");
}


//Function swaps the orignial thumbnails back on button onclick
document.getElementById('swapBack').addEventListener('click', swapBack)

function swapBack(){
  document.getElementById('myImg1').src = 'image.jpg';
  document.getElementById('myImg2').src = 'image2.jpg';
  document.getElementById('myImg3').src = 'image3.jpg';
  document.getElementById('myImg4').src = 'image4.jpg';
}
