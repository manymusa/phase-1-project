const submitPassword = document.querySelector('form');
const textField = document.querySelector('.text'); 

const regexTest = {
    'containsLowerCase': /[a-z]/,
    'containsUpperCase' : /[A-Z]/,
    'containsNumber' : /[0-9]/,
    'containsSpecialCharacter' : /\W/,
    'passwordLength': /^.{12,}/

}

submitPassword.addEventListener('submit',(e) =>{
    e.preventDefault();
    textContent =  textField.value
    submitPassword.reset();
})

textField.addEventListener('input', (e)=>{
    let password = textField.value;
    passwordChecker(password)

})

function passwordChecker (password){
    for(let key in regexTest){
        let checkbox =  document.querySelector('input#'+key);
        console.log('checkbox:' + checkbox);
        let charTest = regexTest[key];
        switch(charTest.test(password)){
            case true:
                console.log(`charTest Passed: ${charTest}, Password: ${password}`)
                checkbox.checked = true;
                checkbox.disabled = false;
                break;
            case false:
                console.log(`charTest Failed ${charTest}, Password: ${password}`)
                checkbox.checked = false;
                checkbox.disabled = true;
                break;
        }
    }
}