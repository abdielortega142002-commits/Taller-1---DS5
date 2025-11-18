document.addEventListener('DOMContentLoaded', function () {
  const tempInput = document.getElementById('temp');
  const humInput = document.getElementById('hum');
  const checkBtn = document.getElementById('checkBtn');
  const resultDiv = document.getElementById('result');

  function mostrarResultado(texto) {
    resultDiv.innerHTML =
      '<p><strong>' + texto + '</strong></p>';
  }

  function mostrarError(texto) {
    resultDiv.innerHTML =
      '</strong> ' + texto + '</p>';
  }

  checkBtn.addEventListener('click', function () {
    const tRaw = tempInput.value;
    const hRaw = humInput.value;

    if (tRaw === '' || hRaw === '') {
      mostrarError('Por favor ingresa temperatura y humedad.');
      return;
    }

    const t = Number(tRaw);
    const h = Number(hRaw);

    if (!Number.isFinite(t) || !Number.isFinite(h)) {
      mostrarError('Valores fuera de rango, verifica los datos');
      return;
    }
    if (h < 0 || h > 100) {
      mostrarError('Valores fuera de rango, verifica los datos');
      return;
    }
    if (t < 10) {
      mostrarResultado('Clima frío');
      return;
    }

    if (t >= 10 && t <= 25) {
      if (h < 60) {
        mostrarResultado('Clima templado y seco');
      } else {
        mostrarResultado('Clima templado y húmedo');
      }
      return;
    }

    if (t >= 26 && t <= 35) {
      mostrarResultado('Clima cálido');
      return;
    }

    if (t > 35) {
      mostrarResultado('Clima caluroso extremo, mantente hidratado');
      return;
    }

    mostrarResultado('Valores fuera de rango, verifica los datos');
  });
});
