
let forum = document.querySelector("#forum");
let myCheck = document.querySelector("input[name='accept']");

myCheck.addEventListener("click", function(){
  let myBtn = document.querySelector(".btn");
  if(this.checked) {
    myBtn.removeAttribute("disabled");
  } else {
    myBtn.setAttribute("disabled", "true");
  }
});

let userEmail = document.querySelector("input[name='email']");
let userRepeatE = document.querySelector("input[name='repeatE']");
let userPassword = document.querySelector("input[name='password']");
let userRepeatP = document.querySelector("input[name='repeatP']");
let userName = document.querySelector("input[name='name']");
let userPhone = document.querySelector("input[name='phone']");
let userCity = document.querySelector("input[name='city']");
let selectImput = document.querySelector("select[name='country']");
let userGender = document.querySelectorAll("input[name='gender']");


forum.addEventListener('submit', function (e) {
  e.preventDefault();

  

  // ...............Email checkin............................

  let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  
    if (userEmail.value.match(regexEmail)) {
      userEmail.style.color = "";
    } else {
      userEmail.style.color = "red";
    }


  if (userEmail.value == "") {
    userEmail.previousElementSibling.style.color = "red";
  } else {
    userEmail.previousElementSibling.style.color = "";
  }
 
  if (userRepeatE.value.match(regexEmail)) {
    userRepeatE.style.color = "";
  } else {
    userRepeatE.style.color = "red";
  }

  if (userRepeatE.value == "") {
    userRepeatE.previousElementSibling.style.color = "red";
  } else {
    userRepeatE.previousElementSibling.style.color = "";
  }

  if (userEmail.value != userRepeatE.value || userEmail.value == "" || userRepeatE.value == "") {
    userEmail.previousElementSibling.style.color = "red";
    userRepeatE.previousElementSibling.style.color = "red";
  } else {
    userEmail.previousElementSibling.style.color = "";
    userRepeatE.previousElementSibling.style.color = "";
  }



// ...............Password checkin............................

  let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/;

  if (userPassword.value.match(regexPass)) {
    userPassword.style.color = "";
  } else {
    userPassword.style.color = "red";
  }

  if (userPassword.value == "") {
    userPassword.previousElementSibling.style.color = "red";
  } else {
    userPassword.previousElementSibling.style.color = "";
  }

  if (userRepeatP.value.match(regexPass)) {
    userRepeatP.style.color = "";
  } else {
    userRepeatP.style.color = "red";
  }

  if (userRepeatP.value == "") {
    userRepeatP.previousElementSibling.style.color = "red";
  } else {
    userRepeatP.previousElementSibling.style.color = "";
  }

  if (userPassword.value != userRepeatP.value || userPassword.value == "" || userRepeatP.value == "") {
    userPassword.previousElementSibling.style.color = "red";
    userRepeatP.previousElementSibling.style.color = "red";
  } else {
    userPassword.previousElementSibling.style.color = "";
    userRepeatP.previousElementSibling.style.color = "";
  }

// ...............Personal Details checkin............................

if (userName.value == "") {
  userName.previousElementSibling.style.color = "red";
} else {
  userName.previousElementSibling.style.color = "";
}

let regexPhone = /^\d[\d\(\)\ -]{4,14}\d$/;

if (userPhone.value.match(regexPhone)) {
  userPhone.style.color = "";
} else {
  userPhone.style.color = "red";
}

if (userPhone.value == "") {
  userPhone.previousElementSibling.style.color = "red";
} else {
  userPhone.previousElementSibling.style.color = "";
}

if (userCity.value == "") {
  userCity.previousElementSibling.style.color = "red";
} else {
  userCity.previousElementSibling.style.color = "";
}

checkRequired(userEmail);
checkRequired(userRepeatE);
checkRequired(userPassword);
checkRequired(userRepeatP);
checkRequired(userName);
checkRequired(userPhone);
checkRequired(userCity);


if (selectImput.value == "empty" ) {
  selectImput.previousElementSibling.style.color = "red";
} else {
  selectImput.previousElementSibling.style.color = "";
}

// ...............Further information............................


if (!checkRadio(gender)){
  document.querySelector(".important").style.color = "red";
}else {
  document.querySelector(".important").style.color = "";
}


});

function checkRequired(input) {
  if (input.value == "" || input.value == null){
  input.previousElementSibling.style.color = "red";
}else {
  input.previousElementSibling.style.color = "";
}
}
 

function checkRadio(items){
  let result = false;
  items.forEach((item) => {
   if (item.checked) {
     result = true;
   }
  });
  return result;
}


