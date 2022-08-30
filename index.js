const submitPassword = document.querySelector('form');
const textField = document.querySelector('.text'); 


submitPassword.addEventListener('submit',(e) =>{
    e.preventDefault();
    textContent =  textField.value
    submitPassword.reset();
})

textField.addEventListener('input', (e)=>{
    console.log(e.data);
})