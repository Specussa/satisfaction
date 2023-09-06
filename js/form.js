const form = document.getElementById('form');
const username = document.getElementById('username');
const usernamecareer = document.getElementById('usernamecareer');
const usernamesay = document.getElementById('usernamesay');
const phone = document.getElementById('phone');
const phonecareer = document.getElementById('phonecareer');
const phonesay = document.getElementById('phonesay');
const text = document.getElementById('text');
const textcareer = document.getElementById('textcareer');
const linkcareer = document.getElementById('linkcareer');
// start validate form project
if(!form){} else {
  form.addEventListener('submit', e => {
  e.preventDefault();
  
  checkInputs();
  });
  function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const phoneValue = phone.value.trim();
  const textValue = text.value.trim();
  
  if(usernameValue === '') {
      setErrorFor(username, 'Обязательное поле'); } else { setSuccessFor(username);
  }
  if(phoneValue === '') {
      setErrorFor(phone, 'Обязательное поле'); } else { setSuccessFor(phone);
  }
  if(textValue === '') {
      setErrorFor(text, 'Обязательное поле'); } else { setSuccessFor(text);
    }
  }
  
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'header__forms_form_control error';
    small.innerText = message;
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'header__forms_form_control success';
  }
  
  // function iscontrol(control) {
  // 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control);
  // }
  }
// end validate form project
  
// start validate form career
const formcareer = document.getElementById('formcareer');
if(formcareer) {
  formcareer.addEventListener('submit', e => {
    e.preventDefault();
    
    checkInputscareer();
    });
    
    function checkInputscareer() {
    // trim to remove the whitespaces
    const usernamecareerValue = usernamecareer.value.trim();
    const phonecareerValue = phonecareer.value.trim();
    const textcareerValue = textcareer.value.trim();
    
    if(usernamecareerValue === '') {
        setErrorFor(usernamecareer, 'Обязательное поле'); } else { setSuccessFor(usernamecareer);
    }
    if(phonecareerValue === '') {
        setErrorFor(phonecareer, 'Обязательное поле'); } else { setSuccessFor(phonecareer);
    }
    if(textcareerValue === '') {
        setErrorFor(textcareer, 'Обязательное поле'); } else { setSuccessFor(textcareer);
      }
    }
    
    function setErrorFor(input, message) {
      const formcareerControl = input.parentElement;
      const small = formcareerControl.querySelector('small');
      formcareerControl.className = 'header__forms_form_control error';
      small.innerText = message;
    }
    
    function setSuccessFor(input) {
      const formcareerControl = input.parentElement;
      formcareerControl.className = 'header__forms_form_control success';
    }
    
    // function iscontrol(control) {
    // 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control);
    // }
}
// end validate form career