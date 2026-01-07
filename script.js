const form = document.querySelector('.signup-form');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword= document.getElementById('confirmPassword');
const checkBox = document.getElementById('terms');
const btn = document.getElementById('createAccount');


form.addEventListener('submit', function(e){
  e.preventDefault();

  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;
  const checkBoxValue = checkBox;


  if (fullNameValue === '') {

    alert('Enter fullname');
    return false;

    
  }
  else if(emailValue ===''){

  
alert('Enter Email')
  }

  else if(passwordValue===''){
    alert('Passowrd Cannot be empty');
    return false;

  }
  else if (confirmPasswordValue === ''){
    alert('Confirm Password');
    return false;
  }

  else if(passwordValue !== confirmPasswordValue){
  
    alert("Password Dont Match");

  }
  else if(!checkBoxValue.checked){

    alert('You must agree to terms')
  }
  else{
    alert('Form submitted succesfully');
  }

})