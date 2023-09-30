const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+{}?/|<>=~";
const alChars = upperCase+lowerCase+number+symbols;
const button = document.querySelector("button");
button.addEventListener("click",()=>{
    createPassword();
    
    navigator.clipboard.writeText(passwordBox.value);
   
});

function createPassword(){
    let password = "";
    password  += upperCase[Math.floor(Math.random()* upperCase.length)];
    password  += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password  += number[Math.floor(Math.random()* number.length)];
    password  += symbols[Math.floor(Math.random()* symbols.length)];


    while(length > password.length)
    {
        password  += alChars[Math.floor(Math.random()* alChars.length)];


    }

    passwordBox.value = password;

}