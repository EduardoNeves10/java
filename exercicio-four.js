// escreva um programa em JavaScript que calcule o IMC (índice de massa corporal) de uma pessoa a partir de seu peso e altura, e informe a classificação de acordo com os seguintes critérios:

let peso = Number(prompt("Digite seu peso: "))
let altura = Number(prompt("Digite sua altura: "))

let resultado = (peso/altura)

if(resultado>40){
    alert("Obesidade grave")
} else if(resultado>= 35){
    alert("Obesidade severa grau II")
}else if(resultado>= 30){
    alert("Obesidade moderada grau I")
}else if(resultado>= 25){
    alert("Sobrepeso Obesidade")
}else if(resultado>= 18.5){
    alert("Peso normal")
}else if(resultado<18.4){
    alert("Abaixo do peso")
}else{
    alert("Erro")
}

alert(`Seu IMC é de: ${resultado}`)