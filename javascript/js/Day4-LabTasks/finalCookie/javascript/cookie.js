function saveData() {
    // Get the values of the input elements
    uName = document.getElementById('name').value.trim();
    age = document.getElementById('age').value.trim();
    gender = document.querySelectorAll('input[name="gender"]');
    color = document.getElementById('color').value;

    // Validate input fields
    if (uName === '') {
        alert('Please enter your name.');
        throw new Error('Please enter your name.');
    }
    if (age === '') {
        alert('Please enter your age.');
        throw new Error('Please enter your age.');
    }
    if (!isFinite(age)) {
        alert('Please enter a valid age.');
        throw new Error('Please enter a valid age.');
    }

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender = gender[i].value;
            // get the checked gender radio button
            var genderRadio = document.querySelector('input[name="gender"]:checked');

            // get the corresponding image based on the radio button value
            var selectedImg = document.querySelector('.gender input[value="' + genderRadio.value + '"] + img');

            // get the src attribute of the selected image
            selectedImgSrc = selectedImg.getAttribute('src');
            break;
        }
        else if(i === gender.length - 1){
            alert('Please select your gender.');
            throw new Error('Please select your gender.');
        }
    }
    
    // Save the values to cookies
    console.log(setCookie('name', uName));
    setCookie('age', age);
    setCookie('gender', gender);
    setCookie('color', color);
    setCookie('profilPicSrc', selectedImgSrc);

    // // Redirect to welcome.html
    // window.location.assign('./welcome.html');

    // Open the welcome.html page in a new tab
    var welcomePage = window.open('./welcome.html', '_blank', 'width=900,height=300');
    welcomePage.focus();
  }
  
  console.log(getCookie('name'));

  deleteCookie('age');

  if (hasCookie('gender')) {
    console.log(getCookie('gender'));
  }
  
  var allCookies = getAllCookies();
  console.log(allCookies);