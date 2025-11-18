document.addEventListener('DOMContentLoaded', function () {
  const x1Input = document.getElementById('x1');
  const y1Input = document.getElementById('y1');
  const x2Input = document.getElementById('x2');
  const y2Input = document.getElementById('y2');
  const calcBtn = document.getElementById('calcBtn');
  const resultDiv = document.getElementById('result');

  function formatNumber(n) {
    if (!Number.isFinite(n)) return String(n);
    return n.toFixed(6).replace(/\.?0+$/, '');
  }

  function mostrarError(text) {
    resultDiv.innerHTML = `<p><strong>Error:</strong> ${text}</p>`;
  }

  calcBtn.addEventListener('click', function () {
    const x1 = parseFloat(x1Input.value);
    const y1 = parseFloat(y1Input.value);
    const x2 = parseFloat(x2Input.value);
    const y2 = parseFloat(y2Input.value);

    // Validación básica
    if (x1Input.value === '' || y1Input.value === '' || x2Input.value === '' || y2Input.value === '') {
      mostrarError('Por favor completa los Campos Correctamente.');
      return;
    }
    if (!Number.isFinite(x1) || !Number.isFinite(y1) || !Number.isFinite(x2) || !Number.isFinite(y2)) {
      mostrarError('Ingresa valores numéricos válidos.');
      return;
    }

    const deltaY = y2 - y1;
    const deltaX = x2 - x1;

    // Caso de línea vertical: pendiente indefinida
    if (deltaX === 0) {
      resultDiv.innerHTML =
        `<p><strong>Puntos:</strong> (${formatNumber(x1)}, ${formatNumber(y1)}) y (${formatNumber(x2)}, ${formatNumber(y2)})</p>` +
        `<p><strong>Pendiente:</strong> Indefinida (línea vertical, x₂ = x₁)</p>`;
      return;
    }

    const m = deltaY / deltaX;

    resultDiv.innerHTML =
      `<p><strong>Puntos Ingresados:</strong> (${formatNumber(x1)}, ${formatNumber(y1)}) y (${formatNumber(x2)}, ${formatNumber(y2)})</p>` +
      `<p><strong>La Pendiente de 2 Puntos utilizando la fórmula es:</strong>  ${formatNumber(m)}</p>`;
  });
});
