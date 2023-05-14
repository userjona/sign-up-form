const pwd1 = document.querySelector("#pwd");
const pwd2 = document.querySelector("#cpwd");
const form = document.querySelector(".form-wrapper");
const btn = document.querySelector("#btn");
const errorPwd = document.querySelector("#error-message");


form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm(){
  if(pwd1.value !== pwd2.value){
    errorPwd.textContent = "Senhas não coincidem.";
    return;
  }
  errorPwd.textContent = '';
}
