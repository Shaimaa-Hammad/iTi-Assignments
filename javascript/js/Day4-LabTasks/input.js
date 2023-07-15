// function to validate user input
function validateInput(input, regex) {
    return regex.test(input);
  }
  
  // function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // prevent default form submission
    
    // get input values from the form
    const guestName = document.getElementById('guest-name').value;
    const phone = document.getElementById('phone').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const color = document.getElementById('color').value;
    
    // validate input values
    const nameRegex = /^[a-zA-Z ]+$/;
    const phoneRegex = /^[0-9]{8}$/;
    const mobileRegex = /^(010|011|012)[0-9]{8}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    if (!validateInput(guestName, nameRegex)) {
      alert('Invalid name!');
      return;
    }
    
    if (!validateInput(phone, phoneRegex)) {
      alert('Invalid telephone number!');
      return;
    }
    
    if (!validateInput(mobile, mobileRegex)) {
      alert('Invalid mobile number!');
      return;
    }
    
    if (!validateInput(email, emailRegex)) {
      alert('Invalid email address!');
      return;
    }
    
    // construct URL parameters
    const params = new URLSearchParams();
    params.append('guest-name', guestName);
    params.append('phone', phone);
    params.append('mobile', mobile);
    params.append('email', email);
    params.append('color', color);
    
    // forward user to new page with input information in the URL
    window.location.href = 'welcome.html?' + params.toString();
  }
  
  // add event listener to the form submit button
  const form = document.getElementById('guest-form');
  form.addEventListener('submit', handleFormSubmit);
  
  function submitHandler(event) {
  event.preventDefault();
  if (validateInput()) {
    const queryString = `name=${guestName.value}&phone=${phone.value}&mobile=${mobile.value}&email=${email.value}&color=${color.value}`;
    window.location.href = `welcome.html?${queryString}`;
  }
}
