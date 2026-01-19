const logoutBtn = document.getElementById('logoutBtn');
const getMealBtn = document.getElementById('getMealBtn');
const loading = document.getElementById('loading');
const mealName = document.getElementById('mealName');
const mealDisplay = document.getElementById('mealDisplay');
const mealCategory =document.getElementById('mealCategory');
const mealArea = document.getElementById('mealArea');
const mealImage = document.getElementById('mealImage')
const mmealInstructions = document.getElementById('mealInstructions');

//get filter buttons

const filterBreakfast =document.getElementById('filterBreakfast');
const filterDessert =document.getElementById('filterDessert');
const filterSeafood =document.getElementById('filterSeafood');
const filterVegetarian=document.getElementById('filterVegetarian');

// //log out
logoutBtn.addEventListener('click', function(){

  window.location.href= 'log in.html'

})

// get data from API


getMealBtn.addEventListener('click', function(){

  loading.style.display='block'
//fetch random meal
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
mealInstructions.innerHTML = meal.strInstructions;



//show meal
 mealDisplay.classList.add('active');


  // Hide loading
      loading.style.display = 'none';
 })

})

//filter
// Function to get meals by category
function getMealByCategory(category) {
  loading.style.display = 'block';
  
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(response => response.json())
    .then(data => {
      // Get a random meal from the filtered results
      const randomIndex = Math.floor(Math.random() * data.meals.length);
      const mealId = data.meals[randomIndex].idMeal;
      
      // Now fetch the full details of that meal
      return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    })
    .then(response => response.json())
    .then(data => {
      const meal = data.meals[0];
      
      mealName.innerHTML = meal.strMeal;
      mealCategory.innerHTML = meal.strCategory;
      mealArea.innerHTML = meal.strArea;
      mealImage.src = meal.strMealThumb;
      mealInstructions.innerHTML = meal.strInstructions;
      
      mealDisplay.classList.add('active');
      loading.style.display = 'none';
    });
}

filterBreakfast.addEventListener('click', function() {
    getMealByCategory('Breakfast');
  console.log('clicked')
});


filterDessert.addEventListener('click', function() {
 getMealByCategory('Dessert');
});

filterDessert.addEventListener('click', function() {
 getMealByCategory('Dessert');
});
filterSeafood.addEventListener('click', function() {
 getMealByCategory('seaFood');
});
filterVegetarian.addEventListener('click', function() {
 getMealByCategory('Vegetarian');
});



