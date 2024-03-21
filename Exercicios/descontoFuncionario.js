// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).

//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip

//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto

export function Desconto(){

    const valorCompra = parseFloat(prompt("Qual o valor total da compra"))
    let pergunta = parseInt(prompt("Digite qual tipo de cliente você é: \n 1 - Cliente \n 2 - Funcionário \n 3 - Cliente VIP"))


    switch(pergunta){

        case 1:

        alert("Você é um cliente, infelizmente você não possui descontos")
        alert(`O valor total da sua compar é de ${valorCompra}`)

        break

        case 2:

        alert("Você é um Funcionario, parábens tem direito a 10% de desconto")
        var Desconto = (10 / 100) * valorCompra;
        var funcionario = valorCompra - Desconto;
        alert(`o valor total da sua compra é de R$:${funcionario} você terá R$:${Desconto}`)

        break

        case 3:
            
        alert("Você é um Cliente VIP, parábens tem direito a 5% de desconto")
        var Desconto = (5 / 100) * valorCompra;
        var funcionario = valorCompra - Desconto;
        alert(`o valor total da sua compra é de R$:${funcionario} você terá R$:${Desconto}`)

        break

        default:

        alert("Erro ao executar o programa: tente novamente")

        break
    }
}