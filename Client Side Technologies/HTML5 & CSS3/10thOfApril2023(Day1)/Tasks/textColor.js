var redValue = 0;
var blueValue = 0;
var greenValue = 0;
var par = document.getElementsByTagName("p")[0];
var red = document.getElementsByTagName("input")[0];
var blue = document.getElementsByTagName("input")[1];
var green = document.getElementsByTagName("input")[2];


red.addEventListener("input", function(){
    redValue = red.value;
    par.style.color = `rgb(${redValue} , ${greenValue}, ${blueValue})`;
});


blue.addEventListener("input", function(){
    blueValue = blue.value;
    par.style.color = `rgb(${redValue} , ${greenValue}, ${blueValue})`;
});


green.addEventListener("input", function(){
    greenValue = blue.value;
    par.style.color = `rgb(${redValue} , ${greenValue}, ${blueValue})`;
});