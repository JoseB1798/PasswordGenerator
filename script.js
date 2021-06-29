// Assignment Code

var generateBtn = document.querySelector("#generate");

function generatePassword(){
 var passLength = prompt("How long would you like your password to be?(Must be a number between 8 and 128)");
 if (passLength < 8 || passLength> 128) {
     alert( "Please enter a character length that is between 8 and 128!"); 
       return generatePassword();
    }
     if (passLength >=8 && passLength <= 128) {
         var speChar = confirm("Would you like to include special characters");
          var num = confirm("Would you like to include numbers?");
           var lowerChar = confirm("Would you like to include lower case letters?");
           var upperChar = confirm("Would you like to include uppercase characters?");
        }

     if (speChar===false && num===false && lowerChar===false && upperChar===false){
         alert("Please confirm a set of criteria!");
         return generatePassword();

     }
        if (speChar) {
            var speChar = ["!@#$%^&*()"];
             
        }  
          if (speChar===false) {
              var speChar = [""]
          }   
          if (num){
              var num=["0123456789"]
          }
          if (num===false) {
              var num = [""]
          }
          if(lowerChar) {
              var lowerChar=["abcdefghikjlmnopqrstuvwxyz"]
          }
          if(lowerChar===false){
            var lowerChar= [""]
           } 
           if (upperChar) {
              var upperChar= ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
           }
          if (upperChar===false){
              var upperChar=[""]
          }
            var randomChar = speChar + num + lowerChar + upperChar
            var password = "";
            for (var i=0; i < passLength; i++) {
                var trueRandom = randomChar[Math.floor(Math.random()* randomChar.Length)];
            password += trueRandom;
            }
            return password
        }
function writePassword(){
    var password = generatePassword();
    var passwordText= document.querySelector("#password");
    passwordText.value=password;
}
generateBtn.addEventListener("click", writePassword);


// Add event listener to generate button
 

