// Um posto está vendendo combustíveis com a seguinte tabela de descontos:



// Álcool:
// . até 20 litros, desconto de 3% por litro Álcool
// . acima de 20 litros, desconto de 5% por litro

// Gasolina:
// . até 20 litros, desconto de 4% por litro Gasolina
// . acima de 20 litros, desconto de 6% por litro

// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado
// da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente
// sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.

// Dica: utilize switch case, operadores lógicos e relacionais e estrutura de condição para otimizar o algorítimo.


//entrada de dados
// = selecionar se deseja abastecer com alcool ou com gasolina;
// = selecionar a quantidade de litros que o usuário deseja;

//processamento de dados
// = switch case para gasolina ou alcool

//saida de dados
// = mostrar a porcentagem de desconto se for alcool ou se for gasolina

export function Gasolina() {

    let tipo = prompt("Qual tipo de combustivel você deseja: \n A - Álcool \n G - Gasolina").toLocaleUpperCase();

    const quantidade = parseFloat(prompt("Quantos litros de Alcool você deseja?"));

    switch (tipo) {
        case "A":
            let valorAlcool = 4.90;
            let totalAlcool;

            if (quantidade <= 20) {

                totalAlcool = quantidade * valorAlcool;
                let descontoAlcool = totalAlcool * 0.03;
                let comDescontoAlcool = totalAlcool - descontoAlcool;

                alert(`Você tem direito a 3% de desconto pois colocou menos de 20 litros`);
                alert(`O valor com desconto é de ${comDescontoAlcool} você economizou ${descontoAlcool}`);

            } else if (quantidade > 20) {

                totalAlcool = quantidade * valorAlcool;
                let descontoAlcool = totalAlcool * 0.05;
                let comDescontoAlcool = totalAlcool - descontoAlcool;

                alert(`Você tem direito a 5% de desconto pois colocou mais de 20 litros`);
                alert(`O valor com desconto acima de 20 litros é de ${comDescontoAlcool} você economizou ${descontoAlcool}`);

            } else {

                alert("Você digitou algo errado");

            }

            break;

        case "G":

            const quantidadeGasolina = parseFloat(prompt("Quantos litros você de Gasolina deseja adicionar:"));
            var valorGasolina = 5.30;
            let totalGasolina;

            if (quantidadeGasolina <= 20) {

                totalGasolina = valorGasolina * quantidadeGasolina;
                let descontoGasolina = totalGasolina * 0.04;
                let comDescontoGasolina = totalGasolina - descontoGasolina;

                alert(`Você tem direito a 4% de desconto pois colocou menos de 20 litros`);
                alert(`O valor com desconto é de ${comDescontoGasolina} você economizou ${descontoGasolina}`);

            } else {

                totalGasolina = valorGasolina * quantidadeGasolina;
                let descontoGasolina = totalGasolina * 0.06;
                let comDesconto = totalGasolina - descontoGasolina;

                alert(`Você tem direito a 4% de desconto pois colocou menos de 20 litros`);
                alert(`O valor com desconto é de ${comDesconto.toFixed(4)} você economizou ${descontoGasolina.toFixed(4)}`);

            }

            break;

        default:

            alert("Opção invalida");
            
            break;
    }

}