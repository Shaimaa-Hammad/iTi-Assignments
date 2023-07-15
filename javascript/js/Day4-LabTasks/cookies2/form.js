function handleSubmit(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var color = document.getElementById("color").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
  
    Cookie.createCookie("name", name, 365);
    Cookie.createCookie("color", color, 365);
Cookie.createCookie("gender", gender, 365);

window.open("greeting.html", "_self");
}

var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
  