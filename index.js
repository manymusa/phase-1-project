const submitPassword = document.querySelector('form');
const textField = document.querySelector('.text'); 
// const specialCharacters =  ['!', `"`, '#', '$', '%', `&`, `'`, '(', ')', '*', '+', `,`, '-', `.`, '/', `:`, `:`, '<', `=`, '>', '?', '@', '[', `\`, `]`, '^', '_', "\`" , "{" ,'|' ,"}", "~"]



submitPassword.addEventListener('submit',(e) =>{
    e.preventDefault();
    textContent =  textField.value
    submitPassword.reset();
})

textField.addEventListener('input', (e)=>{
    console.log(textField.value);
})