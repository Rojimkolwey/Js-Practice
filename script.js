// const button = document.getElementById('multiplyBtn');


// function multiplyNumber(){

//     let x = Number.document.getElementById('firstNumber').value;
//     let y = Number.document.getElementById('secondNumber').value;

//     let z = (x*y)
    
//     document.getElementById('result').innerHTML=z;

// };

//     button.addEventListener('click', multiplyNumber);


const button = document.getElementById('multiplyBtn');

function multiplyNumber(num1,num2){

    return num1*num2; 
};

button.addEventListener('click', function(){

    let x = Number(document.getElementById('firstNumber').value);
    let y = Number(document.getElementById('secondNumber').value);

    let result= multiplyNumber(x, y)

    document.getElementById('result').innerHTML=result;
});