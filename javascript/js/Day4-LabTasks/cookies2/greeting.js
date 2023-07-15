function createGreeting() {
    var name = Cookie.readCookie("name");
    var color = Cookie.readCookie("color");
    var gender = Cookie.readCookie("gender");
    var visits = Cookie.readCookie("visits");
    
    var greeting = document.createElement("h1");
    greeting.style.color = color;
    
    var message = "";
    
    if (gender === "male") {
    message += "Welcome, Mr. " + name + "!";
    } else {
    message += "Welcome, Ms. " + name + "!";
    }
    
    greeting.textContent = message;
    
    var image = document.createElement("img");
    if (gender === "male") {
    image.src = "1.jpg";
    image.alt = "Male Profile Picture";
    } else {
    image.src = "2.jpg";
    image.alt = "Female Profile Picture";
    }
    
    var visitCount = document.createElement("p");
    visitCount.textContent = "You have visited this page " + visits + " time(s).";
    
    document.body.appendChild(greeting);
    document.body.appendChild(image);
    document.body.appendChild(visitCount);
    }
    
    createGreeting();
    
    var resetButton = document.createElement("button");
    resetButton.textContent = "Reset Visits";
    resetButton.addEventListener('click', function() {
    Cookie.eraseCookie("visits");
    window.location.reload();
    });
    
    document.body.appendChild(resetButton);