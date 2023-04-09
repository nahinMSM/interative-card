document.querySelector('.text-camp').oninput = () => {
  document.querySelector('.card-name').innerHTML = document.querySelector('.text-camp').value;
}
document.querySelector('.number-camp').oninput = () => {
  document.querySelector('.card-number').innerHTML = document.querySelector('.number-camp').value
}
document.querySelector('.MM-camp').oninput = () => {
  document.querySelector('.card-month').innerHTML = document.querySelector('.MM-camp').value
}
document.querySelector('.YY-camp').oninput = () => {
  document.querySelector('.card-year').innerHTML = document.querySelector('.YY-camp').value
}
document.querySelector('.CVC-camp').oninput = () => {
  document.querySelector('.card-cvc').innerHTML = document.querySelector('.CVC-camp').value
}
let confirm = document.querySelector('.bt-confirm')
confirm.addEventListener('click', click)
function click() {
  let errorText = document.querySelector('.error-text')
  if (document.querySelector('.text-camp').value.length == '') {
    errorText.innerHTML = 'Type your name'
    document.querySelector('.text-camp').focus()
  } else {
    let numberCamp = document.querySelector('.number-camp')
    let MMCamp = document.querySelector('.MM-camp')
    let YYCamp = document.querySelector('.YY-camp')
    let CVCCamp = document.querySelector('.CVC-camp')
    if (numberCamp.value.length == '' || isNaN(numberCamp.value)) {
      errorText.innerHTML = 'Enter card numbers'
      document.querySelector('.number-camp').focus()
    }
    else if (MMCamp.value.length == '' || MMCamp.value > 31 || isNaN(MMCamp.value)) {
      errorText.innerHTML = 'Enter the expiration month'
      document.querySelector('.MM-camp').focus()
    }
    else if (YYCamp.value.length == '' || isNaN(YYCamp.value)) {
      errorText.innerHTML = 'Enter month and year'
      document.querySelector('.YY-camp').focus()
    }
    else if (CVCCamp.value.length == '' || isNaN(CVCCamp.value)) {
      errorText.innerHTML = 'Enter the CVC'
      document.querySelector('.CVC-camp').focus()
    }
    else {
      document.querySelector("#form-box").style.display = "none";
      document.querySelector("#thanks-box").style.display = "block";
    }
  }
}
let contin = document.querySelector('.bt-Continue')
contin.addEventListener('click', clicka)
function clicka() {
  window.location.reload(true)
}