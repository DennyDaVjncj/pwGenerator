// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

let lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let specChar = ["*", "&", "%", "$", "#", "!"]
let newArr = [];//update name

function cllctCriterion() {
  let criterion = prompt("Ok, your new random PW must have at least 8 characters & no more than 128. enter the desired amount");
  criterion = parseInt(criterion);//this line takes the user 'string' input & turns it to a number dataType

  if (criterion >= 8 && criterion <= 128);
  else {
    alert("length doesn't meet requirement, we strongly suggest that you do a refresh");
    return;
  }

  let criterion0 = confirm("would you like to have lowerCase letters in your random PW?");
  if (criterion0) {
    newArr = newArr.concat(lowCase);
  }

  let criterion1 = confirm("would you like to have uppercase letters in your random PW?")
  if (criterion1) {
    newArr = newArr.concat(upCase);
  }

  let criterion2 = confirm("would you like to have numbers in your random PW?");
  if (criterion2) {
    newArr = newArr.concat(nums);
  }

  let criterion3 = confirm("would you like to have special characters in your random PW?");
  if (criterion3) {
    newArr = newArr.concat(specChar)
  }

  // this logic ensures that the user DID pick 1 criterion to include in their PW
  if (!criterion0 && !criterion1 && !criterion2 && !criterion3) {
    alert("your behavior doesn't make any sense bruh. get focused & get it done. we strongly suggest that you do a refresh");
    return;
  }

  function generatePassword() {
    let emptyQuote = "";
    for (let i = 0; i < criterion; i++) {
      let rndmIzer = Math.floor(Math.random() * newArr.length);
      emptyQuote += newArr[rndmIzer];
    }
    return emptyQuote;//update name
  }
  let password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate 
generateBtn.addEventListener("click", cllctCriterion); 