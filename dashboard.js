const logoutBtn = document.getElementById('logoutBtn');
const getMealBtn = document.getElementById('getMealBtn');
const loading = document.getElementById('loading');
const mealName = document.getElementById('mealName');
const mealDisplay = document.getElementById('mealDisplay');
const mealCategory =document.getElementById('mealCategory');
const mealArea = document.getElementById('mealArea');
const mealImage = document.getElementById('mealImage')


// //log out
logoutBtn.addEventListener('click', function(){

  window.location.href= 'index.html'

})

// get data from API


getMealBtn.addEventListener('click', function(){

  loading.style.display='block'

  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
 .then(Response =>Response.json())
 .then(data =>{
  const meal = data.meals[0];
console.log(data.meals[0].strMeal);
console.log(data.meals[0].strCategory);
console.log(data.meals[0].strArea);
console.log(data.meals[0]);

mealName.innerHTML = meal.strMeal;
mealCategory.innerHTML = meal.strCategory;
mealArea.innerHTML = meal.strArea;
mealImage.src = meal.strMealThumb;



//show meal
 mealDisplay.classList.add('active');


  // Hide loading
      loading.style.display = 'none';
 })

})


