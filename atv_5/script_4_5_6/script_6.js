function calcularValorTotal(valorTotal) {
    if (valorTotal > 200) {
        const desconto = valorTotal * 0.10;
        const valorComDesconto = valorTotal - desconto;
        console.log(`O valor total do pedido com desconto é de R$ ${valorComDesconto.toFixed(2)}, onde o desconto aplicado foi de R$ ${desconto.toFixed(2)}.`);
    } else {
        console.log(`O valor total do pedido é de R$ ${valorTotal.toFixed(2)}.`);
    }
}

calcularValorTotal(250); 
calcularValorTotal(150);