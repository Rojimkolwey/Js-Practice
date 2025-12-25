const button = document.getElementById('clickBtn');

// function changeTextOnClick(){
// button.innerHTML=('Thank you fro clicking me');

// }

// button.addEventListener('click', changeTextOnClick);


// button.addEventListener('click', function()
// {
//     document.getElementById('clickBtn').innerHTML=('Thank you for clicking');

// });

function changeHTMLTextOnClick(){
    document.getElementById('outputText').innerHTML=('Thanks for Clicking me');

}

button.addEventListener('click', changeHTMLTextOnClick);


