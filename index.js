const submitPassword = document.querySelector('form');
const textField = document.querySelector('.text'); 
const regexTest = {
    'containsLowerCase': /[a-z]/gm,
    'containsUpperCase' : /[A-Z]/gm,
    'containsNumber' : /[0-9]/gm,
    'containsSpecialCharacter' : /[$&+,:;=?@#|'<>.^*()%!-]/gm,
}
// const regexLowerCaseLetters = /[a-z]/gm

// const regexUpperCaseLetters = /[A-Z]/g
// const regexNumbers = /[0-9]/g
// const regexSpeicalCharacters = /[$&+,:;=?@#|'<>.^*()%!-]/g



submitPassword.addEventListener('submit',(e) =>{
    e.preventDefault();
    textContent =  textField.value
    submitPassword.reset();
})

textField.addEventListener('input', (e)=>{
    let password = textField.value;
    passwordChecker(password)

})

//checked to see if password contains values needed
//if the values are found, then we enable checkbox and check it 
//if its 
function passwordChecker (password){
    for(let value in regexTest){
        let checkbox =  document.querySelector('input#'+value);
        let charTest = regexTest[value];
        switch(charTest.test(password)){
            case true:
                checkbox.checked = true;
                checkbox.disabled = false;
                break;
            case false:
                checkbox.checked = false;
                checkbox.disabled = true;
                break;
        }
    }
    if(password.length > 12){
        
    }
    
}