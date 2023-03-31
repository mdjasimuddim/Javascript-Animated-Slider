var image = ['slide-2.jpg','slide-3.jpg','slide-1.jpg'];
var img = document.getElementById('img');

var index = -1;

setInterval(slide,1000);

function slide(){
    index++;
    if(index >= image.length){
        index = 0;
        img.src = image[index];
    }
    else{
        img.src = image[index];
    }
}