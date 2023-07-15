var childWindow = null;
    
    function openChildWindow() {
      if (childWindow == null || childWindow.closed) {
        childWindow = window.open('child.html', 'childWindow', 'width=400,height=300');
        childWindow.moveBy((screen.width / 4), (screen.height / 4));
        childWindow.onload = function() {
          writeMessage('Hello, JS!');
        };
      }
    }
    
    function writeMessage(message) {
      var i = 0;
      var intervalId = setInterval(function() {
        childWindow.document.write(message.charAt(i));
        i++;
        if (i >= message.length) {
          clearInterval(intervalId);
          setTimeout(function() {
            childWindow.close();
          }, 1000);
        }
      }, 100);
    }