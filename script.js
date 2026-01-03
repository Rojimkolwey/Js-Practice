const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const results = document.getElementById('result');

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const equalsButton = document.getElementById('equals');

let currentOperation = '';

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

   addition = (value1+value2)
   console.log(addition);
}

else if(currentOperation ==='-'){

    subtraction=(value1-value2);
console.log(subtraction);
}


if(currentOperation === '×'){

    multiply=(value1*value2);
     console.log(multiply);
}

else if(currentOperation === '÷'){

    divide=(value1/value2);
    console.log(divide)
}

});







// const operatorButtons = document.querySelectorAll('.buttons button');

// operatorButtons.forEach(button => {
//     button.addEventListener('click', (event) => {
//           currentOperation = event.target.innerText;
//           console.log("Current operation set to:", currentOperation);
//     });


// });