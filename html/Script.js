var numero = 0; // Variable para almacenar el número

function sumar() {
  numero += 1;
  document.getElementById("numero").textContent = numero;
}

function restar() {
  if (numero > 0) {
    numero -= 1;
    document.getElementById("numero").textContent = numero;
  }
