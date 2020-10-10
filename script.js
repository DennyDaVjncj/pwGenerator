// legacy Code
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

let lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let specChar = ["*", "&", "%", "$", "#", "!","@","^","(",]
let userCriteria = [];//my tutor says I need to imrove naming convention

function cllctCriterion() {
  let pwLength = prompt("Ok, your new random PW must have at least 3 characters & no more than 128. enter the desired amount");
  pwLength = parseInt(pwLength);//this line takes the user 'string' input & turns it to a number dataType

  if (pwLength >= 3 && pwLength <= 128);
  else {
    alert("length doesn't meet requirement, tap the big red button again");
    return;
  }//i'm happy with how the logic came  out!

  let pwLength0 = confirm("would you like to have lowerCase letters in your random PW?");
  if (pwLength0) {
    userCriteria = userCriteria.concat(lowCase);
  }

  let pwLength1 = confirm("would you like to have uppercase letters in your random PW?")
  if (pwLength1) {
    userCriteria = userCriteria.concat(upCase);
  }

  let pwLength2 = confirm("would you like to have numbers in your random PW?");
  if (pwLength2) {
    userCriteria = userCriteria.concat(nums);
  }

  let pwLength3 = confirm("would you like to have special characters in your random PW?");
  if (pwLength3) {
    userCriteria = userCriteria.concat(specChar)
  }

  // this logic ensures that the user DID pick 1 pwLength to include in their PW
  if (!pwLength0 && !pwLength1 && !pwLength2 && !pwLength3) {
    alert("your behavior doesn't make any sense bruh. get focused & get it done. tap the big red button again, please");
    return;
  }

  function generatePassword() {
    let rndmIzedSelects = "";
    for (let i = 0; i < pwLength; i++) {
      let rndmIzer = Math.floor(Math.random() * userCriteria.length);
      rndmIzedSelects += userCriteria[rndmIzer];
    }
    return rndmIzedSelects;//update name
  }
  let password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate 
generateBtn.addEventListener("click", cllctCriterion); 