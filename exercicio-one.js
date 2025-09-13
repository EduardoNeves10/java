// crie um programa em JavaScript que recebe uma nota de um aluno e informe a classificação de acordo com a seguinte escala

let nota = prompt("Condição de nota: ")

if ( nota>=9){
    alert("Execelente")
} else if (nota>=7){
    alert("Bom")
} else if (nota>=5){
    alert("Regular")
} else if (nota<5){
    alert("Insuficiente")
}else{
    alert("Erro")
}