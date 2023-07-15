var vid = document.getElementById("myVid");

var slider = document.getElementsByTagName("input")[0];
vid.addEventListener("play", function() {
    slider.value = 0;
  });  
vid.addEventListener("loadedmetadata", function() {
    slider.max = vid.duration;
  });
vid.addEventListener("timeupdate", function() {
    slider.value = vid.currentTime;
  });
slider.addEventListener("input", function() {
    vid.currentTime = slider.value;
  });

var play = document.getElementsByTagName("input")[1];
    play.addEventListener("click", function(){
            vid.play();
        });

var stop = document.getElementsByTagName('input')[2];
    stop.addEventListener("click", function(){
        vid.pause();
    });

var start = document.getElementsByTagName('input')[3];
    start.addEventListener("click", function(){
        vid.pause();
        vid.currentTime = 0;
        vid.play();
    });

var back = document.getElementsByTagName('input')[4];
    back.addEventListener("click", function(){
        vid.currentTime -= 5;
    });

var forward = document.getElementsByTagName('input')[5];
    forward.addEventListener("click", function(){
        vid.currentTime += 5;
    });

var end = document.getElementsByTagName('input')[6];
    end.addEventListener("click", function(){
        vid.currentTime = vid.duration;
    });

var volume = document.getElementsByTagName('input')[7];
    volume.addEventListener("input", function(){
        vid.volume = volume.value;
    });

var sound = true;
var mute = document.getElementsByTagName('input')[8];
    mute.addEventListener("click", function(){
        if(sound === true){
            vid.volume = 0;
            mute.value = "Sound On";
            sound = false;
        }
        else {
            vid.volume = 1;
            mute.value = "Mute";
            sound = true;
        }
    });

var speed = document.getElementsByTagName('input')[9];
    speed.addEventListener("input", function(){
        vid.playbackRate = speed.value;
    });

var fullScreen = false;
var fs = document.getElementsByTagName('input')[10];
fs.addEventListener("click", function(){
    if(fullScreen === false){
        vid.style.width = "100%";
        vid.style.height = "100vh";
        fullScreen = true;
        fs.title = "Normal Size Screen";
        fs.value = "[]";
    }
    else {
        vid.style.width = "400px";
        vid.style.height = "400px";
        fullScreen = false;
        fs.title = "FullScreen";
        fs.value = "[   ]";
    }
});
