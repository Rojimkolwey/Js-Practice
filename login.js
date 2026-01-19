const loginForm= document.getElementById('loginForm');
const Emailaddress= document.getElementById('email');
const password= document.getElementById('password');
const loginBtn= document.getElementById('login-btn');


//select errors

const emailError =document.getElementById('emailError');
const passwordError =document.getElementById('passwordError');


function showError(inputElement, errorElement, mesage){
    errorElement.textContent =mesage;
    errorElement.classList.add('active');
    inputElement.style.border='2px solid red';  

}




loginForm.addEventListener('submit', function(e){
     e.preventDefault();

    const EmailaddressValue = Emailaddress.value;
    const passwordValue = password.value

    if(EmailaddressValue === ''){
        showError(Emailaddress, emailError, "Enter Email")
    }
    else if(!Emailaddress.value.includes('@') || !EmailaddressValue.includes('.')){
        showError(Emailaddress, emailError, "Enter a Valid Email")

    }
    else if(passwordValue===''){
        showError(password, passwordError, "Enter Password")

    }
    else{
        window.location.replace('dashboard.html')
    }

})

