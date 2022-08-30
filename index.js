let submitPassword = document.querySelector('form');

submitPassword.addEventListener('submit',(e) =>{
    e.preventDefault();
    textContent =  document.querySelector('.text').value
    submitPassword.reset();
})