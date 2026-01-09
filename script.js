const form = document.querySelector('.signup-form');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword= document.getElementById('confirmPassword');
const checkBox = document.getElementById('terms');
const btn = document.getElementById('createAccount');

// error mesage

const fullNameError = document.getElementById('fullname-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirmPassword-error');


function showError(input, errorElement, mesage){
 errorElement.textContent = mesage;
 input.style.border='2px solid red';

}

function clearError(input, errorElement){
  errorElement.textContent='';
  input.style.border='';
}

form.addEventListener('submit', function(e){
  e.preventDefault();

  const fullNameValue = fullName.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;
  const checkBoxValue = checkBox;


  if (fullNameValue === '') {

     showError(fullName, fullNameError, 'Enter Full Name');
    
    
  }
  else if(emailValue ===''){

  
showError(email, emailError, 'Enter Email');
  }

  else if(passwordValue===''){
   showError(password, passwordError, 'Enter Password');
   

  }
  else if (confirmPasswordValue === ''){
    showError(confirmPassword, confirmPasswordError, 'Confirm Password');;
  
  }

  else if(confirmPasswordValue.length<5){
   showError(confirmPassword, confirmPasswordError, 'Password Must contain 5 Characters');
  }
  

  else if(passwordValue !== confirmPasswordValue){
  
    showError(confirmPassword, confirmPasswordError, 'Password dont Match');;

  }

  else if(!checkBoxValue.checked){

    alert('You must agree to terms')
  }

  else{
    alert('Sign up Successfully');
     setTimeout(function(){
      window.location.href('dashboard.html');

     }, 2000);
  }
 
})

fullName.addEventListener('input', function(){

  clearError(fullName, fullNameError)
})

email.addEventListener('input', function(){

  clearError(email, emailError)
})
password.addEventListener('input', function(){

  clearError(password, passwordError)
})
confirmPassword.addEventListener('input', function(){

  clearError(confirmPassword,confirmPasswordError)
})
