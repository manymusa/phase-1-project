const submitPassword = document.querySelector('form');
const textField = document.querySelector('.text'); 
const commonPasswordResult = document.querySelector('#common-result');
const compromisedPasswordResult = document.querySelector('#compromised-result');


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
    // isPasswordCompromised(textContent);
    isPasswordCommon(textContent);
    submitPassword.reset();
})

textField.addEventListener('input', (e)=>{
    let password = textField.value;
    commonPasswordResult.textContent = ''
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

// function isPasswordCompromised(password){

//     let hashedPassword =  sha1(password).toUpperCase();
//     let hashedPrefix =  hashedPassword.slice(0,5);
//     let hashedSuffix = [];
//     fetch('https://api.pwnedpasswords.com/range/'+hashedPrefix)
//     .then(res => res.json())
//     .then(json => {
//         console.log(typeof json)


//     })

// }

function isPasswordCommon(password){
    const mostCommonPassword = ['12345','123456','123456789','test1','password','12345678','zinch','g_czechout','asdf','qwerty','1234567890','1234567',,'Aa123456.','iloveyou','1234','abc123','111111','123123','dubsmash','test','princess','qwertyuiop','sunshine','BvtTest123','11111','ashley','00000','000000','password1','monkey','livetest','55555','soccer','charlie','asdfghjkl','654321','family','michael','123321','football','baseball','q1w2e3r4t5y6','nicole','jessica','purple','shadow','hannah','chocolate','michelle','daniel','maggie','qwerty123','hello','112233','jordan','tigger','666666','987654321','superman','12345678910','summer','1q2w3e4r5t','fitness','bailey','zxcvbnm','fuckyou','121212','buster','butterfly','dragon','jennifer','amanda','justin','cookie','basketball','shopping','pepper','joshua','hunter','ginger','matthew','abcd1234','taylor','samantha','whatever','andrew','1qaz2wsx3edc','thomas','jasmine','animoto','madison','0987654321','54321','flower','Password','maria','babygirl','lovely','sophie','Chegg123'];
    const isCommon = mostCommonPassword.filter(ele => ele === password);
    if(isCommon.length === 1){
        commonPasswordResult.textContent = 'Yes';
    }else{
        commonPasswordResult.textContent = 'No';
    }
}