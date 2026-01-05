const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const results = document.getElementById('result');

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

let currentOperation = '';
let result="";

addButton.addEventListener('click', function (){

    currentOperation = '+';
    console.log ('the current opartion id assigned to' , currentOperation);
});


subtractButton.addEventListener('click', function(){
    currentOperation ="-"
    console.log (currentOperation);

});

multiplyButton.addEventListener('click', function(){
    currentOperation = '×'
     console.log (currentOperation);

});

divideButton.addEventListener('click', function(){
    currentOperation = '÷'
     console.log (currentOperation);

});


equalsButton.addEventListener('click', function(){
 const value1 = Number(num1.value);
 const value2 = Number(num2.value);


 if (currentOperation === "+"){

   result = (value1+value2)
   console.log(result );
}

else if(currentOperation ==='-'){

   result =(value1-value2);
console.log(result);
}


else if(currentOperation === '×'){

    result=(value1*value2);
     console.log(result);
}

else if(currentOperation === '÷'){

    result=(value1/value2);
    console.log(result)
}

document.getElementById('result').innerHTML=result;

});

// const operatorButtons = document.querySelectorAll('.buttons button');

// operatorButtons.forEach(button => {
//     button.addEventListener('click', (event) => {
//           currentOperation = event.target.innerText;
//           console.log("Current operation set to:", currentOperation);
//     });


// });



clearButton.addEventListener('click', function(){

num1.value='';
num2.value='';
results.innerText = '';
currentOperation = 'Results';

})

// class car {
//     constructor( brand, model, year){

//         this.brand=brand;
//          this.model=model;
//           this.year=year;

//     }
//     getInfo(){
//     console.log (`This is a ${this.year} ${this.brand} ${this.year}`);

// }
// startEngine(){
//     console.log(`Vromm ${this.brand} is starting`);
    
// }


// }

// const car1= new car("Volkswagen", "golfR", 2022)
// const car2= new car("Toyota", "caldina", 2025)


// car1.getInfo();
// car1.startEngine();
// car2.getInfo();






