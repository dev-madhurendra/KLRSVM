var i = 0;//start point
var images = [];
var time = 1500;
// image list
images[0] = 'image/img7.jpeg';
images[1] = 'image/img3.jpeg';
images[2] = 'image/img4.jpeg';
images[3] = 'image/img9.jpeg';
images[4] = 'image/img6.jpeg';
images[5] = 'image/img8.jpeg';
images[6] = 'image/img1.jpeg';

//function to change image
function slideImg(){
    document.s.src = images[i];
    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("slideImg()" , time);
}
window.onload = slideImg;