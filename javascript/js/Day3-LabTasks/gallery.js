var images = document.getElementsByTagName('img');
var currentIndex = 0;
var slideshowInterval;

for (var i = 0; i < images.length; i++) {
    images[i].style.width = '500px';
    images[i].style.height = '500px';
  }

// function showImage(index) {
//   for (var i = 0; i < images.length; i++) {
//     if (i === index) {
//       images[i].style.display = 'block';
//     } else {
//       images[i].style.display = 'none';
//     }
//   }
// }

function showImage(index) {
    for (var i = 0; i < images.length; i++) {
      if (i === index) {
        images[i].style.display = 'block';
      } else {
        images[i].style.display = 'none';
      }
    }
    
    if (currentIndex === images.length - 1) {
      // document.getElementById('nextButton').onclick = function(event){
      //   event.preventDefault();
      // }

      document.getElementById('nextButton').disabled = true;
      document.getElementById('nextButton').style.opacity = '1'; // prevent opacity from changing
    }
    else {
      document.getElementById('nextButton').disabled = false;
    }

    if (currentIndex === 0) {
      // document.getElementById('prevtButton').onclick = function(event){
      //   event.preventDefault();
      // }

      document.getElementById('prevButton').disabled = true;
      document.getElementById('prevButton').style.opacity = '1'; // prevent opacity from changing
    }
    else {
      document.getElementById('prevButton').disabled = false;
    }
  }

showImage(0);

function prevImage() {
    if (currentIndex > 0){
        currentIndex--;
    }
  showImage(currentIndex);
}

function nextImage() {
  currentIndex++;
  showImage(currentIndex);
  if(currentIndex === images.length){
    showImage(0);
    currentIndex = 0;
  }
}

function startSlideshow() {
  if(slideshowInterval !== undefined){
    clearInterval(slideshowInterval);
  }
  slideshowInterval = setInterval(function() {
    nextImage();
  }, 2000);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}