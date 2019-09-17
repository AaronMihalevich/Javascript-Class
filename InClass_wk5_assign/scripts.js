
// ****************image array*******************
var myImages = ["image.jpg", "image2.jpg", "image3.jpg", "image4.jpg",
"image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg"];


// ******************my timer********************

//sets the timer function and delay
var timer = setInterval(timeFunc, 3000);

var i = 0;

  function timeFunc(){
    if(i < (myImages.length - 1)){
      i++;
      document.getElementById('imgbox').src = myImages[i];
    }
}

// stops the timer on click
document.getElementById('myClick').addEventListener('click', function(){
  clearInterval(timer);
})

// **************my image thumbs*****************

myString = "<div class='imgthumb'><img onclick='imgSwap(this)' class='photo' src='"
myStringClose = "'</div>"

var p = 0;
for(p=0; p < myImages.length; p++){
    console.log(myImages[p]);
    document.getElementById('thumbs').innerHTML += myString + myImages[p] + myStringClose;
  }





//Fuction that swaps the thumbnail image for the large image
function imgSwap(theImg){
  document.getElementById('imgbox').src = theImg.src;
}

