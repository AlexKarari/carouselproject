var imageSlider = document.getElementById('imagesSlider');

var images = ["url('../carouselproject/images/eclass.jpg')", "url('../carouselproject/images/gwagon.jpg')","url('../carouselproject/images/maybach.jpg')","url('../carouselproject/images/sclass.jpg')","url('../carouselproject/images/gl.jpg')" ];
var counter = 0;


function carousel(){
  imageSlider.style.backgroundImage = images[counter];
  counter++;

  if(counter >4){
    counter =0;
  }
}
setInterval(carousel, 3000);
