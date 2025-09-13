// escreva um programa em JavaScript que determine a categoria de um atleta com base no seu peso, conforme a seguinte tabela:

let atleta = prompt("categoria do atleta por peso: ")

if(atleta >= 110){
    alert("Categoria: Pesada")
} else if (atleta>=60){
    alert("Categoria: Média")
}else if (atleta<=59){
    alert("Categoria: Leve")
}else{
    alert("Erro")
}