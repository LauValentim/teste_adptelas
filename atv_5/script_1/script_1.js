document.getElementById('drivingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const idade = parseInt(document.getElementById('idade').value);
    const temCarteira = document.getElementById('habilitado').value === 'true';
    const resultado = document.getElementById('resultado');

    resultado.textContent = "";

    if (isNaN(idade)) {
        resultado.textContent = "Por favor, insira uma idade válida.";
        resultado.style.color = 'red';
    } else if (idade >= 18 && temCarteira) {
        resultado.textContent = "Você está apto(a) a dirigir.";
        resultado.style.color = 'green';
    } else if (idade >= 18 && !temCarteira) {
        resultado.textContent = "Você não está apto(a) a dirigir.";
        resultado.style.color = 'orange';
    } else {
        resultado.textContent = "Você não está apto(a) a dirigir.";
        resultado.style.color = 'red';
    }
});