// escreva um programa em JavaScript que receba a idade de uma pessoa e informe o valor do ingresso de acordo com a seguinte tabela:

let idade = prompt("valor de ingresso com a respectiva idade: ")

if( idade>=60){
    alert("Valor R$ 20")
} else if (idade>= 18){
    alert("Valor R$ 30")
} else if (idade>= 12){
    alert("Valor R$ 15")
} else if(idade<12){
    alert("Valor R$ 10 ")
}else{
    alert("Erro")
}