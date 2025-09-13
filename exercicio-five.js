// escreva um programa em JavaScript que receba as notas de um aluno em cinco diciplinas e calcule a média final. Depois, o programa deve classificar a média de acordo com os seguintes critérios:

let notaOne = Number(prompt("Digite sua primeira nota"))
let notaTwo = Number(prompt("Digite sua segunda nota"))
let notaTree = Number(prompt("Digite sua terceira nota"))
let notaFour = Number(prompt("Digite sua quarta nota"))
let notaFive = Number(prompt("Digite sua quinta nota"))

let resultado = ((notaOne+notaTwo+notaTree+notaFour+notaFive)/5)

if (resultado>=9){
    alert("Excelente")
}else if(resultado>=7){
    alert("Bom")
}else if(resultado>=5){
    alert("Regurlar")
}else if (resultado<5){
    alert("Insuficiente")
}else{
    alert("Erro")
}

alert(`Sua nota é ${resultado}`)