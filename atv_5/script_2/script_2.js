document.getElementById('comparisonForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado');

    resultado.textContent = "";

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado.textContent = "Por favor, insira números válidos.";
        resultado.style.color = 'red';
    } else if (numero1 > numero2) {
        resultado.textContent = `O número ${numero1} é maior que ${numero2}.`;
        resultado.style.color = 'green';
    } else if (numero1 < numero2) {
        resultado.textContent = `O número ${numero1} é menor que ${numero2}.`;
        resultado.style.color = 'orange';
    } else {
        resultado.textContent = "Os dois números são iguais.";
        resultado.style.color = 'blue';
    }
});