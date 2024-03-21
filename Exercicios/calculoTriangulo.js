// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.

//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console

export function CalcTriangulo(){

    alert("você selecionou a opção tipo de triângulos, Nos forneça três valores dos lados do triângulo")

    let lado1 = parseInt(prompt("Qual o valor do 1° lado do triângulo"))
    let lado2 = parseInt(prompt("Qual o valor do 2° lado do triângulo"))
    let lado3 = parseInt(prompt("Qual o vaor do 3° lado do triângulo"))

    if(lado1 == lado2 && lado2 == lado3){
        alert("O triângulo é Equilátero pois possui os três lados iguais")
    }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        alert("O triângulo é Isóscele possui 2 lados iguais.")
    }else{
        alert("Os três lados são diferentes")
    }

}