
// ****************image array*******************
var myImages = ["image.jpg", "image2.jpg", "image3.jpg", "image4.jpg", 
"image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg"];


// ******************my timer********************
// function timer(){ 
//   setInterval(function(){
//   for(i=0; i < myImages.length; i++){
//     document.getElementById('imgbox').src = myImages[i];
//   }}, 3000);}

var timer = setInterval(timeFunc, 3000);

  function timeFunc(){
    for(i=0; i < myImages.length; i++){
      document.getElementById('imgbox').src = myImages[i];
  }
  console.log(myImages)
  }


// function imgTimer(){
//   setInterval(
//     function(){
//         for(var i = 0; i < myImages.lenght; i++){
//           document.getElementById('imgbox').src = myImages[i];
//       }},3000)}

// **************my image thumbs*****************

myImages.forEach(arrayImages);

  function arrayImages() {
      document.getElementById('thumbs').innerHTML = 
      "<div class='imgthumb'><img onclick='imgSwap(this)' src='" + item + "alt='image #1'></div>";
    }  




//  Fuction that swaps the thumbnail image for the large image
// function imgSwap(theImg){
//   document.getElementById('imgbox').src = theImg.src;
// }


// Function swaps thumbnails on large image double click
// and adds button to bottom of page
// document.getElementById('imgbox').addEventListener('dblclick', newImgs);
// document.getElementById('imgbox').addEventListener('dblclick', swapButton);

// function newImgs(){
//   document.getElementById('myImg1').src = 'image5.jpg';
//   document.getElementById('myImg2').src = 'image6.jpg';
//   document.getElementById('myImg3').src = 'image7.jpg';
//   document.getElementById('myImg4').src = 'image8.jpg';
// }

// function swapButton() {
//   var element = document.getElementById("swapBack");
//   element.classList.remove("hide");
// }


// //Function swaps the orignial thumbnails back on button onclick
// document.getElementById('swapBack').addEventListener('click', swapBack)

// function swapBack(){
//   document.getElementById('myImg1').src = 'image.jpg';
//   document.getElementById('myImg2').src = 'image2.jpg';
//   document.getElementById('myImg3').src = 'image3.jpg';
//   document.getElementById('myImg4').src = 'image4.jpg';
// }

