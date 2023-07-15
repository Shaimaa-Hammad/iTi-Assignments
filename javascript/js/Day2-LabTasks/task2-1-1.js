// Both scripts are okay
// *****************************************************************

// var childWindow = null; // Initialize child window variable
//     var intervalId = null; // Initialize interval variable
    
//     function openChildWindow() {
//       childWindow = window.open('child.html', '_blank', 'width=200,height=200'); // Open child window
//       intervalId = setInterval(moveChildWindow, 1000); // Move child window every 10ms
//     }
    
//     function stopChildWindow() {
//       clearInterval(intervalId); // Stop moving child window
//       childWindow.focus(); // Keep child window in focus
//     }
    
//     function moveChildWindow() {
//       var x = childWindow.screenX;
//       var y = childWindow.screenY;
//       var screenWidth = screen.width;
//       var screenHeight = screen.height;
//       var randomX = Math.floor(Math.random() * 100); // Generate random X coordinate within range of -100 to 100
//       var randomY = Math.floor(Math.random() * 100); // Generate random Y coordinate within range of -100 to 100
      
//       if (y = screenHeight - 200) {
//         childWindow.moveBy(randomX, -20);
//       } 
//       else if (y = 0) {
//         childWindow.moveBy(randomX, 20);
//       } 
//       else {
//         childWindow.moveBy(randomX, randomY);
//       }
      
//       if (x = screenWidth - 200) {
//         childWindow.moveBy(-20, randomY);
//       } 
//       else if (x = 0) {
//         childWindow.moveBy(20, randomY);
//       } 
//       else {
//         childWindow.moveBy(randomX, randomY);
//       }
//     }


var childWindow;

function openChildWindow() {
        childWindow = window.open('child.html', "", 'width=200,height=200'); // Open child window
      }

var timer;

function move() {
  timer = setInterval(function(){
    childWindow.moveTo(Math.floor(Math.random() * 500), Math.floor(Math.random() * 500))
  }, 300)
  childWindow.focus();
}

move();

function stopChildWindow() {
        clearInterval(timer); // Stop moving child window
        childWindow.focus(); // Keep child window in focus
      }