// Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o
// preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o
// desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:



// - Se quantidade <= 5 o desconto será de 2%
// - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
// - Se quantidade > 10 o desconto será de 5%

// Dica: utilize if / else if / else


//entrada de dados
// = criar variável para receber o nome do produto 
// = perguntar ao usuário qual vai ser a quantidade de produtos
// = perguntar o preço unitário do produto

//processamento de dados
// = realizar o calculo do total da quantidade do produto * valor unitário do produto 
// = realidar o calculo do desconto com base na quantidade de produtos que o usuário vai comprar

//saída de dados
// = mostrar a saída dos produtos que ela escolher e a quantidade e o preço de cada produto
// = mostrar também o desconto de cada produto

export function ProdutoDesconto() {
    let nomeProduto = prompt("Digite um nome do produto");
    let quantidadeProduto = parseInt(prompt("Digite a quantidade de produto"));
    let precoUnitario = parseFloat(prompt("Digite o valor da unidade do produto"));
    let total = (quantidadeProduto * precoUnitario) * 0.02;
    let total1 = (quantidadeProduto * precoUnitario) * 0.03;
    let total2 = (quantidadeProduto * precoUnitario) * 0.05


    if (quantidadeProduto <= 5) {
        alert(`Seu produto ${nomeProduto}, quantidade ${quantidadeProduto}, e o seu preço ${precoUnitario}, você tera um desconto de 2% ${(quantidadeProduto * precoUnitario) * 0.02} reais com desconto ele ficara ${(precoUnitario - total).toFixed(1)}`);

    }
    else if (quantidadeProduto > 5 && quantidadeProduto <= 10) {
        alert(`Seu produto ${nomeProduto}, quantidade ${quantidadeProduto}, e o seu preço ${precoUnitario}, você tera um desconto de 3% ${(quantidadeProduto * precoUnitario) * 0.03} reais com desconto ele ficara ${(precoUnitario - total1).toFixed(1)}`);


    }
    else {
        alert(`Seu produto ${nomeProduto}, quantidade ${quantidadeProduto}, e o seu preço ${precoUnitario} , você tera um desconto de 5% ${(quantidadeProduto * precoUnitario) * 0.05} reais com desconto ele ficara ${(precoUnitario - total2).toFixed(1)}`);

    }
}
//saída de dados
// = mostrar a saída dos produtos que ela escolher e a quantidade e o preço de cada produto
// = mostrar também o desconto de cada produto