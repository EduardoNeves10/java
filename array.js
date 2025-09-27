let frutas = ["Maça", "Banana","Melancia"]

// frutas.unshift("laranja")//adicionar a fruta no começo
// frutas.push("Uva")//adicionar a fruta no final
// frutas.splice(2,0, "abacaxi")//adiciona na posição que eu quiser, 2 posição, 0 remover, adicionar 'abacaxi'

// frutas.pop()//remove ultimo item do array
// frutas.shift()//remover primeiro item do array
// frutas.splice(1,2)//remover na posição que eu quiser, 1 indicex posição, 2 itens

// console.log(frutas.length);//conta quantos itens tem no array '2'

// frutas.forEach(function(elemento, indice, arrayCompleto)){}

//percorre todo o array e executa todos indices separadamentes
frutas.forEach(function(fruta){
    // console.log(`ola, ${fruta}`);
})
 //ola, Maça
// ola, Banana
// ola, Melancia


let nomes = ["Ana", "Bruno", "Lucas"]

nomes.forEach(function(nome){
    // console.log(`Olá, ${nome}`);
    
})
// Olá, Ana
// Olá, Bruno
// Olá, Lucas


nomes.forEach(nome =>{
    // console.log(`Seja bem vindo ${nome}`);
})

// Seja bem vindo Ana
// Seja bem vindo Bruno
// Seja bem vindo Lucas

//exercício 1:exibir os Nomes de uma lista. Objetivo: Criar um array de nomes e usar 'forEach()' para exibir no console

let dias = ["Segunda","Terça","Quarta","Quinta"]

dias.forEach(dia =>{
    // console.log(`Dias da semana ${dia}`);
})

//exercíci 2: Dobrar os valores de um array e exibir no console. Use forEach no array original

let numeros = ["1","2","3"]

numeros.forEach(numero =>{
    dobro = numero*2
    // console.log(`O dobro da lista ${dobro}`);  
})

// O dobro da lista 2
// O dobro da lista 4
// O dobro da lista 6

let num = ["2", "4", "6"]
let dobr = []

num.forEach(nan =>{
    dobr.push(nan*2)
})
// console.log(dobr); //[ 4, 8, 12 ]


let names = ["Joao","Amanda","Larissa"]

let nomesMaiusculos = names.map(nome =>{
    return nome.toUpperCase()
}) 

// console.log(nomesMaiusculos); //[ 'JOAO', 'AMANDA', 'LARISSA' ]



let numbers = ["51","32","40","2"]

let dobros = numbers.map(Number => Number*2)
console.log(dobros); //[ 102, 64, 80, 4 ]



