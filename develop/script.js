// Assignment Code
//button beneath text area, for user to press & gen pw
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
let pChar="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()+";
let rndmIzer=Math.floor(Math.random()*pChar.length);
let nums=[1,2,3,4,5,6,7,8,9,0];
let nums1=["1234567890".split("")];
console.log(nums1);
// let specChar=[*,&,%,$,#]
let generateBtn = document.querySelector("#generate");
let usResponse;


function writePassword() {
  let criterion=prompt("Ok, tell us the length of choice for your new, random PW");
  criterion=parseInt(criterion);//this line takes the user 'string' input & turns it to a number dataType
  // let password = generatePassword();//perhaps this method needs defining
  // console.log(parseInt(criterion));
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  
  if(criterion>=8&&criterion<=128){
    alert("user passed check");
  }else{
    alert("not a valid input, must refresh");    
  };
  
  let newArr=[];
  let criterion0=confirm("would you like to have lowerCase & upperCase letters in your new random PW?");
  if(criterion0){
    console.log(newArr);
    newArr=newArr.concat(upCase);    
    newArr=newArr.concat(lowCase);  
  }


}


// Add event listener to generate 
generateBtn.addEventListener("click", writePassword);