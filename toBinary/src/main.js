import './style.css'
import { toBinary } from './toBinary'

// Selecciona los elementos del DOM
const form = document.querySelector('form');
const input = document.querySelector('#text');
const resultDiv = document.querySelector('#result');

// Maneja el evento de envío del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = input.value;
  if (texto.trim() === '') {
    resultDiv.textContent = 'Por favor, escribe un texto.';
    return;
  }

  const binario = toBinary(texto)
  
  resultDiv.textContent = binario;
});



