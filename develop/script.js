// Assignment Code
//button beneath text area, for user to press & gen pw
let pChar="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()+";
let lowCase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upCase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let nums=[1,2,3,4,5,6,7,8,9,0];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  //I LIKE TO KEEP THINGS CONDENSED WITHIN CODE BLOCKS, CONDESNED & ABBREVIATED
  criterion0=confirm("would you like a PW between 8 & 128 characters?");
  criterion1=confirm("would you like your PW to include uppercase letters?");
  criterion2=confirm("would you like to include numbers?");
  criterion3=confirm("would you like special characters in your PW?");
  aboutU=prompt("before receiving your new PW, first tell us something cool about yourself...");

  while(criterion0!==false){
    let rndmIzer0=pChar.Math.floor(Math.random()*10)+1;
    console.log("hopefully this tells me something");
  }if()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create container to store allowed characters
//prmts/cnfrms/alerts for guiding user toward choosing to gen a new PW that meets set criteria
//parameters are set by user via cnfrms/prmts
  //check for parameters

