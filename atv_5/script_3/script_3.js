document.getElementById('parityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    resultado.textContent = "";

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, insira um número válido.";
        resultado.style.color = 'red';
    } else if (numero % 2 === 0) {
        resultado.textContent = `O número ${numero} é par.`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = `O número ${numero} é ímpar.`;
        resultado.style.color = 'blue';
    }
});