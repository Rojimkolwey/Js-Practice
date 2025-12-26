const button = document.getElementById('multiplyBtn');


button.addEventListener('click', multipy);

function multipy(){

let x = document.getElementById('num1').value;
let y = document.getElementById('num2').value;
let z = (x*y);


document.getElementById('result').innerHTML=z;

    console.log(z);

    };



























































// const button = document.getElementById('clickBtn');
// let x = 10;
// let y = 20;
// let z =(x+y)

// // function changeTextOnClick(){
// // button.innerHTML=('Thank you fro clicking me');

// // }

// // button.addEventListener('click', changeTextOnClick);


// // button.addEventListener('click', function()
// // {
// //     document.getElementById('clickBtn').innerHTML=('Thank you for clicking');

// // });

// // function changeHTMLTextOnClick(){
// //     document.getElementById('outputText').innerHTML=('Thanks for Clicking me');

// // }

// // button.addEventListener('click', changeHTMLTextOnClick);



// button.addEventListener('click', function(){
//     z;

//     console.log (z)
// });