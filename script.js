
// const button = document.getElementById('checkBtn');

// button.addEventListener('click', function () {
//   try {
//     const ageInput = document.getElementById('ageInput').value;

//     if (ageInput === "") {
//       throw "Age cannot be empty";
//     }

//     const age = Number(ageInput);

//     if (isNaN(age)) {
//       throw "Age must be a number";
//     }

//     if (age >= 18) {
//       resultText.innerHTML = "You are old enough";
//     } else {
//       resultText.innerHTML = "Sorry, you are too young";
//     }

//   } catch (error) {
//     resultText.innerHTML = error;
//   }
// });

// try {
//   // risky code
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Check completed");
// }

const date = new Date;


const fruits =["mango", "eggs", "eggs", "eggs", "caots", "eggs", "eggs", "eggs", "eggs", "eggs"];

for( let i=0; i<=fruits.length; i++){

 console.log(fruits[i]);

};

console.log(date.getFullYear());