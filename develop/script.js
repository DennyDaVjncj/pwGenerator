// Assignment Code
//button beneath text area, for user to press & gen pw
// let pChar="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()+";
// var generateBtn = document.querySelector("#generate");
// let criterion1=confirm("would you like your PW to include uppercase &lowercase letters?");
// let criterion2=confirm("would you like to include numbers in PW?");
// let criterion3=confirm("would you like special characters in PW?");
// let aboutU=prompt("before receiving your new PW, first tell us something cool about yourself...");

// // Write password to the #password input
// function writePassword() {
//   var password=generatePassword();
//   var passwordText=document.querySelector("#password");
//   passwordText.value = password;  

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);





// Write password to the #password input
// function talk2user(){    
//   if(criterion){
//     alert("your random PW is set to be "+rndmIzer0+" in length");
//   }  
// }
// talk2user();


// Assignment Code
let lowCase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upCase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// let rndmIzer=lowCase+upCase.Math.floor(Math.random()*127)+1;
let nums=[1,2,3,4,5,6,7,8,9,0];
let generateBtn = document.querySelector("#generate");
let usResponse;


function writePassword() {
  let criterion=prompt("Ok, tell us the length of choice for your new, random PW");
  parseInt(criterion);
  // let criterion0=
  // let password = generatePassword();
  // console.log(parseInt(criterion));
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  if(criterion>=8&&criterion<=128){
    console.log("user passed check");
  }else{
    alert("not a valid input, must refresh");    
  };

  let criterion0=confirm("would you like to have lowerCase & upperCase letters in your new random PW?");
  if(criterion0!==false){
    let newArr=lowCase.concat(upCase);
    console.log(newArr);
  }else{
    console.log("OOOOOK, Bruce!!")
  }
}


// Add event listener to generate 
generateBtn.addEventListener("click", writePassword);