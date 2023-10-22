import './css/style.css';
import cipher from './js/cipher';

const offsetSlider = document.querySelector('#offsetSlider');
const offsetValue = document.querySelector('#offsetValue');

offsetSlider.addEventListener('input', () => {
  offsetValue.textContent = offsetSlider.value;
});

document.querySelector('#encrypt').addEventListener('click', () => {
  const message = document.querySelector('#message').value;
  const offset = parseInt(offsetSlider.value);
  const encryptedMessage = cipher.encode(message, offset);
  document.querySelector('#result').textContent = `Encrypted: ${encryptedMessage}`;
});

document.querySelector('#decrypt').addEventListener('click', () => {
  const message = document.querySelector('#message').value;
  const offset = parseInt(offsetSlider.value);
  const decryptedMessage = cipher.decode(message, offset);
  document.querySelector('#result').textContent = `Decrypted: ${decryptedMessage}`;
});
