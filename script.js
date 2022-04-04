window.onload = () => {
  doPasswordsMatch();
}

doPasswordsMatch = () => {
  let passwordInput = document.getElementById('password');
  let confirmPasswordInput = document.getElementById('confirmPassword');
  let passwordError = document.querySelector('.password-error');
  if (passwordInput.value === confirmPasswordInput.value) {
    passwordInput.style.border = '';
    confirmPasswordInput.style.border = '';
    passwordError.textContent = '';
  } else {
    passwordInput.style.border = '1px solid red';
    confirmPasswordInput.style.border = '1px solid red';
    passwordError.textContent = '* Passwords do not match';
  }
}
