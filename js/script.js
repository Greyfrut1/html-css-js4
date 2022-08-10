
const openPopUp = document.getElementById('open_pop_up')
const openPopUpp = document.getElementById('open_pop_upp')
const closePopUp = document.getElementById('pop_up_close')
const popUp = document.getElementById('pop_up')

openPopUp.addEventListener('click', function (e){
  e.preventDefault();
  popUp.classList.add('active');
})
openPopUpp.addEventListener('click', function (e){
  e.preventDefault();
  popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active')
})
$(function (){
  $('.slider-container').slick({
    autoplay: true,
    autoplaySpeed: 2000,
  })
});


let form = document.querySelector('.feedback-form'),
    formInput = document.querySelectorAll('.input'),
    inputEmail = document.querySelector('.email'),
    inputName = document.querySelector('.name'),
    inputPhone = document.querySelector('.phone-number');

form.onsubmit = function () {
  let emailVal = inputEmail.value,
      phoneVal = inputPhone.value,
      nameVal = inputName.value;
  let i = 0;
  formInput.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('error');
      input.placeholder = 'Поле обьязательно для заполнения'
    } else {
      input.classList.remove('error')
      i = 1;
    }
  })
  if(i === 1){
    return true
  }else{
    return false;
  }
}