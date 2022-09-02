const submitPassword = document.querySelector('form');
const textField = document.querySelector('.text'); 

const regexTest = {
    'containsLowerCase': /[a-z]/,
    'containsUpperCase' : /[A-Z]/,
    'containsNumber' : /[0-9]/,
    'containsSpecialCharacter' : /\W/,
    'passwordLength': /^.{12,}/
};

submitPassword.addEventListener('submit',(e) =>{
    e.preventDefault();
    textContent =  textField.value;
    isPasswordCompromised(textContent);
    submitPassword.reset();
})

textField.addEventListener('input', (e)=>{
    let password = textField.value;
    passwordStrengthChecker(password);

})

function passwordStrengthChecker(password){
    for(let key in regexTest){
        let checkbox =  document.querySelector('input#'+key);
        let charTest = regexTest[key];
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
}

function isPasswordCompromised(password){
    let hashedPassword =  sha1(password);
    let firstFiveCharsOfHash =  hashedPassword.slice(0,5);
    fetch('https://api.pwnedpasswords.com/range/'+firstFiveCharsOfHash)


}