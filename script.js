const button = document.getElementById('multiplyBtn');


function multiplyNumber(){

    let x = document.getElementById('firstNumber').value;
    let y = document.getElementById('secondNumber').value;

    let z = (x*y)
    
    document.getElementById('result').innerHTML=z;

};

    button.addEventListener('click', multiplyNumber);
