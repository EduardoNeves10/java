// crie um programa em JavaScript que utilize a estrutura switch para exibir o nome do mês com base no número informado pelo usuario ( de 1 a 5). o programa deve funcionar da seguinte forma.

let mes = Number(prompt("Digite um número de 1 a 5"))
switch(mes){
    case 1:
        alert("Janeiro")//valor
        break//encerrou
    case 2:
        alert("Fevereiro")
        break
    case 3:
        alert("Março")
        break
    case 4:
        alert("Abril")
        break
    case 5:
        alert("Maio")
        break
    default://se digital algum opção não lista cai nesse
        alert("Erro")
}