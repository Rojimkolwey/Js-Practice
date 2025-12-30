
const button = document.getElementById('checkBtn');



button.addEventListener('click', function(){

    const ageInput = document.getElementById('ageInput').value;

if (ageInput > 18) {
    alert('User is old Enough');
    
} else{
    alert('Sorry too young');
}


button.addEventListener('click', ageInput);


});