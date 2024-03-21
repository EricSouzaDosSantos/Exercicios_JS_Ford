// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.


//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo


//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol

export function Placar() {
    let time1 = prompt("Qual o nome do primeiro time:")
    let time2 = prompt("Qual o nome do segundo time:")
    let gol1 = parseInt(prompt(`Quantos gols o ${time1} fez:`))
    let gol2 = parseInt(prompt(`Quantos gols o ${time2} fez:`))
    let primeiroTime = { nome: time1, gol: gol1 }
    let segundoTime = { nome: time2, gol: gol2 }

    if (primeiroTime.gol > segundoTime.gol) {

        alert(primeiroTime.nome + " ganhou de " + primeiroTime.gol + " X " + segundoTime.gol)
        alert("o placar é de " + primeiroTime.gol + " X " + segundoTime.gol)

    } else if (segundoTime.gol > primeiroTime.gol) {

        alert(segundoTime.nome + " ganhou de " + segundoTime.gol + " X " + primeiroTime.gol)
        alert("o placar é de " + segundoTime.gol + " X " + primeiroTime.gol)

    } else if (primeiroTime.gol == segundoTime.gol) {

        alert(primeiroTime.nome + " empatou com o time " + segundoTime.nome)
        alert("o placar é de " + primeiroTime.gol + " X " + segundoTime.gol)
        
    }
}