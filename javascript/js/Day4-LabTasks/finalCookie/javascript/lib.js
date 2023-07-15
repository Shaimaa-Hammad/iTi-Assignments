var date = new Date();
function setCookie(cookieName, cookieValue, expires) {
    if(!cookieName || !cookieValue){
        throw new Error ("Please provide both name and value for the cookie!");
    }
    else if(typeof(cookieName) != "string" || typeof(cookieValue)!= "string"){
        throw new Error ("Please provide strings for both name and value for the cookie!");
    }
    else if(expires == undefined) {
        document.cookie = cookieName + "=" + cookieValue;
    }
    else{
        date = expires;
        date.setMonth(date.getMonth() + 1);
        document.cookie = cookieName + "=" + cookieValue + ";expires=" + date.toUTCString();
    }
    return;
}
  

function getCookie(cookieName) {
    if(!cookieName){
        throw new Error ("Please provide both name and value for the cookie!");
    }
    else if(typeof(cookieName) != "string"){
        throw new Error ("Please provide strings for both name and value for the cookie!");
    }
    else {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.indexOf(cookieName + '=') === 0) {
            return cookie.substring(cookieName.length + 1, cookie.length);
            }
        }
        return;
            }
}

function deleteCookie(cookieName) {
    if(!cookieName){
        throw new Error ("Please provide both name and value for the cookie!");
    }
    else if(typeof(cookieName) != "string"){
        throw new Error ("Please provide strings for both name and value for the cookie!");
    }
    else {
        document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
}


function hasCookie(cookieName) {
    if(!cookieName){
        throw new Error ("Please provide both name and value for the cookie!");
    }
    else if(typeof(cookieName) != "string"){
        throw new Error ("Please provide strings for both name and value for the cookie!");
    }
    else {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.indexOf(cookieName + '=') === 0) {
            return true;
          }
        }
        return false;
    }
  }


  function getAllCookies() {
    var cookies = document.cookie.split(';');
    var result = {};
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      var name = cookie.substring(0, cookie.indexOf('='));
      var value = cookie.substring(cookie.indexOf('=') + 1);
      result[name] = value;
    }
    return result;
  }
  