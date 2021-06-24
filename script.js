// Assignment Code
specialCharacters="!@#$%^&*()"
var generateBtn = document.querySelector("#generate");
    
    
    function writePassword() {
     var password= generatedPassword();
     var passwordText= document.querySelector("#password"); 


     passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input

// Add event listener to generate button
 

    var passwordLength= prompt("Please enter the number of characters you want for your new password. It must be more than 12 characters, but less than 128")
     var numbers= confirm ("Do you want numbers in your password?")
      var lowerCases=confirm("Do you want lowercases in your password?")
      
         var upperCases=confirm("Do you want uppercases in your password?")
      var special=confirm("Do you want special characters in your password?")
        var minimumCount=0

    var minimumNumbers="";
    var minimumLowerCases="";
    var minimumUpperCases="";
    var minimumSpecialCharacters="";

    var functionArray={
        getNumbers: function() {
            return String.fromCharCode(Math.floor(Math.random()*10*48));

        },
         getLowerCases: function(){
             return String.fromCharCode(Math.floor(Math.random()* 26 + 97));
         },
         getUpperCases: function(){
             return String.fromCharCode(Math.floor(Math.random()* 26 +65));
         },
         getSpecialCharacters: function(){
             return specialCharacters[Math.floor(Math.random()* specialCharacters. length)]
         }
    };
    if (numbers===true) {
        minimumNumbers=functionArray.getNumbers();
        minimumCount++;
    }
      if (lowerCases===true){
          minimumLowerCases= functionArray.getLowerCases();
          minimumCount++;
        

    }
      if (uppercases===true) {
          minimumUpperCases=functionArray.getUpperCases();
           minimumCount++;
        }
        if (special===true) {
            minimumSpecialCharacters=functionArray.getSpecialCharacters();
             minimumCount++;
          }
             var randomPasswordGenerated="";
            for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
                var randomNumberPicked= Math.floor(Math.random()*4);

            }
                  randomPasswordGenerated += randomNumberPicked;

                  randomPasswordGenerated+=minimumNumbers;
                  randomPasswordGenerated+=minimumLowerCases;
                  randomPasswordGenerated+=minimumUpperCases;
                  randomPasswordGenerated+=minimumSpecialCharacters;
                  return randomPasswordGenerated;
                 
            
        
