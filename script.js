function generatePassword() {
  const length = document.getElementById('length').value;
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeLowercase = document.getElementById('lowercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;

  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+=-{}[]|:;<>?,./';

  let characters = '';
  if (includeUppercase) characters += upper;
  if (includeLowercase) characters += lower;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  document.getElementById('password').value = password;
}

document.getElementById('copyBtn').addEventListener('click', () => {
  const passwordField = document.getElementById('password');
  passwordField.select();
  document.execCommand('copy');
  alert('Password copied!');
});


document.getElementById('themeSwitch').addEventListener('change', function () {
  document.body.classList.toggle('light', this.checked);
});


// Generate on load
window.onload = generatePassword;
