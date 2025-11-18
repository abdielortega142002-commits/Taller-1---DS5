document.addEventListener('DOMContentLoaded', function () {
  const ageInput = document.getElementById('age');
  const calculateBtn = document.getElementById('calculateBtn');
  const resultDiv = document.getElementById('result');

  function calcularPrecio(age) {
    if (age <= 3) return 0;
    if (age <= 8) return 2;
    if (age <= 16) return 5;
    if (age <= 35) return 7;
    return 10;
  }

  function mostrarResultado(age) {
    const price = calcularPrecio(age);
    if (price === 0) {
      resultDiv.innerHTML = `<h2>Edad Ingresada: <strong>${age}</strong> años</h2><p><strong>El Precio de Tu Entrada al Parque es:</strong> Gratis</p>`;
    } else {
      resultDiv.innerHTML = `<h2>Edad Ingresada: <strong>${age}</strong> años</h2><p><strong>El Precio de Tu Entrada al Parque es:</strong> ${price} dólares</p>`;
    }
  }

  calculateBtn.addEventListener('click', function () {
    const raw = ageInput.value;
    if (raw === '') {
      resultDiv.textContent = 'Por favor ingresa una edad';
      return;
    }
    const num = Number(raw);
    if (!Number.isFinite(num) || num < 0) {
      resultDiv.textContent = 'Por favor ingresa una edad válida';
      return;
    }
    const age = Math.floor(num);
    mostrarResultado(age);
  });
});

