# Password Strength Checker

This site will, on user input, take a password and respond with the password strength, commonality, and if was a part of any database breaches.

## How to use

Fork then clone this repo. 

You need to also clone the following repo as well and have it in the same directory: https://github.com/emn178/js-sha1/tree/65b3898c4eecc919477dce9c6e41bb0be1b65219

You can access the page by typing open index.html in the terminal.

## How Does It Work?

Upon forking and downloading repo, you will be able to open the index.html and be presented with this.

![alt text](https://github.com/manymusa/phase-1-project/blob/main/Img/first%20img.png)


The uppermost block provides strong password rules if the user is looking to create a new password.


The middle block is where the user can create a password. There is also an option to generate a password. If you press the button that named 'New Password' a password will be provided.

![alt text](https://github.com/manymusa/phase-1-project/blob/main/Img/second%20img.png)


While the user is typing their password, the container on the bottom left-hand side containing a line of text and a checkbox will be turned on and checked for each rule they meet. This is updated on every input.

For this example, we will be using Password123! 

![alt text](https://github.com/manymusa/phase-1-project/blob/main/Img/third%20img.png)

When you click submit password, the middle and right-hand containers will populate with text informing the user if the password is among the 100 most common passwords of 2022 and if this password was found in a data breach using the have haveIBeenPwned API respectively. 

![alt text](https://github.com/manymusa/phase-1-project/blob/main/Img/fourth%20img.png)

If the password has been breached, the user can click on the suggested text to see how many times the password has been apart of a data breach 

![alt text](https://github.com/manymusa/phase-1-project/blob/main/Img/fifth%20img.png)

# Roadmap

In the future I would want to include more than 100 passwords.
I would also like to create stronger auto generated passwords

# Credits 

I would like to credit github user emn178 for their sha1 repo. It was great help in converting the passwords to a sha1 for the GET requests to the haveIBeenPwned API.

Link to most common passwords in 2022: https://techcult.com/most-common-passwords/ 

Link to haveIBeenPwned API: https://haveibeenpwned.com/API/v3#PwnedPasswords 

Link to random password generator API: https://makemeapassword.ligos.net/Api
