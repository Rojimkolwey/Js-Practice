const logoutBtn = document.getElementById('logoutBtn');
const getMealBtn = document.getElementById('getMealBtn');


// //log out
logoutBtn.addEventListener('click', function(){

  window.location.href= 'index.html'

})

// get data from API


getMealBtn.addEventListener('click', function(){

  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
 .then(Response =>Response.json())
 .then(data =>{
console.log(data);

 })

})


