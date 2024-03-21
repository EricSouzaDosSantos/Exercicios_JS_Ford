import { CalcTriangulo } from "./calculoTriangulo.js"
import { Placar } from "./jogoFutebol.js"
import { sort } from "./nomesSortidos.js"
import { Desconto } from "./descontoFuncionario.js"
import { Gasolina } from "./postoGasolina.js"

let entradaSaida = true;

while (entradaSaida) {
    let per = parseInt(window.prompt("Escolha uma as seguintes funções: \n 1 - Tipo de triangulo \n 2 - Desconto na Compra \n 3 - Placar do jogo \n 4 - Sortear e inserir nomes \n 5 - Saber o desconto da gasolina \n 6 - Descontos nos produtos \n 7 - Taxa de mortalidade \n 8 - Sair"))

    switch (per) {


        case 1:

            CalcTriangulo()

            break

        case 2:

            Desconto()

            break

        case 3:

            Placar()

            break

        case 4:

            sort()

            break

        case 5:

            Gasolina()

            break


        case 6:


            break

        case 7:


            break

        case 8:

        entradaSaida = false

            break

        default:

            alert("Falha")

            break;
    }
}