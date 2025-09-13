let sinal ="verde"

if (sinal == "verde"){
    console.log("pode passar")//pode passar
}

if (sinal == "rosa"){
    console.log("pode passar")
}else{
    console.log("não pode passar")//não pode passar
}

let nota = 5

if (nota>5){
    console.log("Aprovado")
}else{
    console.log("Reprovado")//reprovado
}

if (nota>=5){
    console.log("Aprovado")//aprovado
}else{
    console.log("Reprovado")
}

let idade = 18
let temCarteira = true//verdadeiro, tem carteira || false não tem carteira falso

if (idade >= 18 && temCarteira == true){
    console.log("Pode dirigir")//pode dirrigir
}else{
    console.log("Não pode dirigir")
}


let semaforo = "azul"

if(semaforo == "verde"){
    console.log("Liberado")
} else if (semaforo == "amarelo"){
    console.log("Devagar")
}else if (semaforo == "vermelho"){
    console.log("Pare !!!")
} else{
    console.log("Em Manutenção")//Em Manutenção
}

// let senha = prompt("informe sua senha")

// if (senha == "senai"){
//     alert("liberado")//aparecer no site o rersultado
// }else{
//     alert("tente novamente")
// }

let dia = 7
switch (dia){
    case 1://caso o valor seja 1
        console.log("Domingo")//valor
        break//encerrou
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("terça")
        break
    case 4:
        console.log("quarta")
        break
    case 5:
        console.log("quinta")
        break
    case 6:
        console.log("sexta")
        break
    case 7:
        console.log("Sábado")
        break
    default://se digital algum opção não lista cai nesse
        console.log("Erro")
}