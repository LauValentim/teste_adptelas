function contarCaracteres(str) {
    const comprimento = str.length;
    if (comprimento > 20) {
        console.log("O limite de caracteres foi excedido.");
    } else if (comprimento === 20) {
        console.log("Você atingiu o limite de caracteres.");
    } else {
        console.log("O limite de caracteres ainda não foi excedido...");
    }
}

contarCaracteres("Esta é uma string com mais de 20 caracteres.");
contarCaracteres("Exatamente vinte...");
contarCaracteres("Curta."); 