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


  if (fullNameValue === '') {

    alert('Enter fullname');

    
  }
})