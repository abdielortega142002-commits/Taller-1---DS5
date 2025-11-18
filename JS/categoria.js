document.addEventListener('DOMContentLoaded', function () {
  const codeInput = document.getElementById('code');
  const checkBtn = document.getElementById('checkBtn');
  const resultDiv = document.getElementById('result');

  function esCodigoValido(code) {
    return /^\d{3}$/.test(code);
  }

  function contarDigitosPares(code) {
    let contador = 0;
    for (let i = 0; i < code.length; i++) {
      const d = Number(code[i]);
      if (d % 2 === 0) contador++;
    }
    return contador;
  }

  function categoriaPorPares(pares) {
    if (pares === 3) return 'Director General';
    if (pares === 2) return 'Directivo';
    if (pares === 1) return 'Staff';
    return 'Seguridad';
  }

  function mostrarMensaje(texto, esError = false) {
    resultDiv.innerHTML = `<p${esError ? '' : ''}>${texto}</p>`;
  }

  checkBtn.addEventListener('click', function () {
    const code = (codeInput.value || '').trim();

    if (!esCodigoValido(code)) {
      mostrarMensaje('Ingresa exactamente 3 dígitos numéricos.', true);
      return;
    }

    const pares = contarDigitosPares(code);
    const categoria = categoriaPorPares(pares);

    resultDiv.innerHTML =
      `<p><strong>La Categoría al cuál Perteneces es: </strong> ${categoria}</p>`;
  });
});
