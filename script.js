const button = document.getElementById('wishBtn');



function wishNewYear(){

    let userName = document.getElementById('nameInput').value;
    let message = "🎊 Happy New Year 2025, "+ userName;

    document.getElementById('message').innerHTML=message;

    console.log(message);


};

 button.addEventListener('click', wishNewYear);
