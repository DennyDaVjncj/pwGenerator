// function writePassword() {
//   var password=generatePassword();
//   var passwordText=document.querySelector("#password");
//   passwordText.value = password;  
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Assignment Code
let generateBtn=document.querySelector("#generate");
let password=generatePassword();//perhaps this method needs defining
let passwordText=document.querySelector("#password");
passwordText.value=password;

let lowCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M', 'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let nums=[1,2,3,4,5,6,7,8,9,0];
let specChar=["*","&","%","$","#","!"]
let newArr=[];
let rndmIzer=Math.floor(Math.random()*newArr.length);
//need to figure out how to store single characters based on selection by user

function cllctCriterion(){
  let criterion=prompt("Ok, your new random PW must have at least 8 characters & no more than 128. enter the desired amount");
  criterion=parseInt(criterion);//this line takes the user 'string' input & turns it to a number dataType

  if(criterion>=8&&criterion<=128);
  else{
    alert("length doesn't meet requirement, we strongly suggest that you do a refresh");
    preventDefault();  
}

  let criterion0=confirm("would you like to have lowerCase letters in your random PW?");
  if(criterion0){
    newArr=newArr.concat(lowCase);
    console.log(newArr);
  }else{
    alert("ok, we've updated your preference!");
  }

  let criterion1=confirm("would you like to have uppercase letters in your random PW?")
  if(criterion1){
    newArr=newArr.concat(upCase);
    console.log(newArr);
  }else{
    alert("ok, we've updated your preference!");
  }

  let criterion2=confirm("would you like to have numbers in your random PW?");
  if(criterion2){
    newArr=newArr.concat(nums);
    console.log(newArr);
  }else{
    alert("ok, we've updated your preference!");
  }

  let criterion3=confirm("would you like to have special characters in your random PW?");
  if(criterion3){
    newArr=newArr.concat(specChar)
    console.log(newArr);
  }else{
    alert("we've updated your preference!");
  }

  // this line of code ensures that the user DID pick 1 criterion to include in their PW
  if(criterion0===false&&criterion1===false&&criterion2===false&&criterion3===false){
    alert("your behavior doesn't make any sense bruh. get focused & get it done. we strongly suggest that you do a refresh");
    preventDefault();
  }
}

function generatePassword(){
  newArr[rndmIzer];
  console.log(newArr);
}
generatePassword();
//in this new function, im gonna randomly take the number of characters selected by user
  //call newly built array within new function
  //randomize what gets taken out of it 
  //communicate that to the user

// Add event listener to generate 
generateBtn.addEventListener("click", cllctCriterion);