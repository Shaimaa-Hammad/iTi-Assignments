// var childWindow = null;

// function openChildWindow() {
//   childWindow = window.open('child2.html', '_blank', 'width=200,height=200');

//   setInterval(function() {
//     childWindow.scrollBy(10, 0);
//   }, 100);
//   }

//   setTimeout(function() {
//     childWindow.close();
//   }, 7000); // Close the child window after 7 seconds (7000 milliseconds)


var childWindow;
var interval;
var textLength;

function openChildWindow() {
  childWindow = window.open('child2.html', '_blank', 'width=200,height=200');
  childWindow.focus();

  // var widthInPixels;
  
  childWindow.onload = function() {
    interval = setInterval(function() {
      if(childWindow.scrollX === childWindow.document.body.scrollWidth) {
        console.log("entered");
        clearInterval(interval);
        childWindow.close();
      }
      else {
        childWindow.scrollBy(1000, 0);
      }
    }, 100);

    // Get the HTML content of the child window
    var childWindowContent = childWindow.document.body.innerHTML;
    console.log(childWindowContent);

    // Get the length of the text in a <p> element
    var p = childWindow.document.querySelector('p');
    textLength = p.textContent.length;

    // var range = childWindow.document.createRange();
    // range.selectNode(childWindow.document.body);
    // range.insertNode(p);
    // var rect = p.getBoundingClientRect();
    // widthInPixels = rect.width;

    // // Log the no. of pixels to the console
    // console.log(widthInPixels);
  };  
}

// var interval = setInterval(function() {
//   if(childWindow.scrollX === childWindow.document.body.scrollWidth) {
//     console.log("entered");
//     clearInterval(interval);
//     childWindow.close();
//   } else {
//     childWindow.scrollBy(1000, 0);
//   }
// }, 100);