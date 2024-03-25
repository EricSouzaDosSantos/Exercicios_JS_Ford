// A taxa de natalidade e a taxa de mortalidade são indicadores estatísticos de fundamental importância por ajudar a compreender aquilo que os especialistas chamam de dinâmica populacional e a entender sua relação com variáveis que influenciam o desenvolvimento, como qualidade de vida, migrações, , fatores socioeconômicos e localização. Sabendo disso, crie um programa que calcule os dois indicadores utilizando o comando switch.



// Observação : A taxa de natalidade é calculada pela seguinte fórmula: taxa de natalidade = (número de crianças nascidas x 1000) / número de habitantes;
// Enquanto que, a taxa de mortalidade = (números de óbitos x 1000) /número de habitantes.

//olá!

//entrada de dados
// verificar o que o usuario vai querer calcular (natalidade ou mortalidade)
// determinar o número de crianças nascidas e o número de habitantes para natalidade
// determinar o número de óbitos e o número de habitantes para mortalidade

//processamento de dados
// realizar o calculo de natalidade e mortalidade 
// determinar com switch case se o usuario vai querer calcular natalidade ou mortalidade

//saída de dados
// imprimir na tela a taxa de mortalidade ou natalidade

export function Mortalidade() {

    let tipoDado;
    let quantidadeCrianca;
    let numeroHabitantes;
    let numeroObito;



    do {
        tipoDado = parseInt(prompt(`Qual voce deseja calcular
    1-Natalidade
    2-Mortalidade`));
    } while (tipoDado !== 1 && tipoDado !== 2);

    do{
    quantidadeCrianca = parseInt(prompt("Quantas crianças nasceram"));
    numeroHabitantes = parseInt(prompt("Quantos habitantes tem?"));
    numeroObito = parseInt(prompt("Quantos habiantes morreram?"));
    }while(isNaN(quantidadeCrianca) || isNaN(numeroHabitantes) || isNaN(numeroObito))


    switch (tipoDado) {
        case 1:
            let taxaNatalidade
            do{
            taxaNatalidade = (quantidadeCrianca * 1000) / numeroHabitantes;
            
            if(isNaN(taxaNatalidade)){
                alert("Digite um NUMERO ao inves de letras")
            }
            }while(isNaN(taxaNatalidade))
            
            alert(`A quantidade de criança nascidas é ${quantidadeCrianca} e a taxa de natalidade ${taxaNatalidade.toFixed(0)}%`);
            break;
        case 2:
            let taxaMortalidade = (numeroObito * 1000) / numeroHabitantes;
            alert(`A quantidade de óbitos é ${numeroObito} e a taxa de mortalidade ${taxaMortalidade.toFixed(0)}%`);
            break;

        default:
            alert("algo deu errado!");
            break;
    }
}