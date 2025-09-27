let pessoa = {
    nome: "Eduardo",
    idade: 23,
    profissão: "Engenheiro"
}

// console.log(pessoa.nome); //Eduardo
// console.log(pessoa.idade); //23
// console.log(pessoa.profissão); //Engenheiro

pessoa.nome = "Neves" //alterando o nome
// console.log(pessoa); //{ nome: 'Neves', idade: 23, 'profissão': 'Engenheiro' }

pessoa.email = "eduardoneves@setInterval.com.br"// adicionando novo item
// console.log(pessoa); //nome: 'Neves', idade: 23, 'profissão': 'Engenheiro', email: 'eduardoneves@setInterval.com.br'

// 1- crie um objeto representando um carro com marca, nodelo e ano. 2- modidique um valor dentro do objeto

let carros = {
    gol: "wolkswagem",
    modelo: "golf gti",
    ano: 2016
}

carros.cor = "vermelho"
carros.ano = 2015
// console.log(carros); //{ gol: 'wolkswagem', modelo: 'golf gti', ano: 2015, cor: 'vermelho' }

 

setTimeout(() => {
    // console.log("Primeiro");
    
}, 3000) //executado após 3 segundos e mostrado na tela

// console.log("segundo"); // executa esse em tempo real, e o de cima depois de três segundos


function assarPizza(parametro) {
    setTimeout(() =>{
        console.log("pizza pronta");
        parametro()
    }, 3000)
}


function comerPizza() {
    console.log("comendo pizza");
}

// assarPizza(comerPizza) // parametro da função 1 é a função 2


function pedirComida(callback) {
    setTimeout(()=>{
        console.log("pedido pronto");
        callback() //executada depois do console e antes do tempo de 3s
    }, 3000)
}

function comer() {
    console.log("Comendo a comida!");
    
}


// pedirComida(callback())


function carregarProduto(callback) {
    setTimeout(()=>{
    console.log("Porduto carregado com sucesso");// carregado primeiro após 3 segundos, e na sequencia a função a baixo
    callback()// igual a função exibirProduto
    },3000)
}

function exibirProduto() {
    console.log("Exibir detalhes do produto");
}

// carregarProduto(exibirProduto)//substituir callback por exibirProduto

// function verificarIdade(callbackSucces, callbackError) {
//     setTimeout(() =>{
//         let result = 18
            
//         if(result == 18){
//             callbackSucces()
//         }else{
//             callbackError()
//         }

//     },3000)
// }

// function sucesso() {
//     console.log("uhuuuuul! MAior de idade");
// }

// function erro() {
//     console.log("Opss! Menor de idade");
// }

// verificarIdade(sucesso(erro))


// const pizzaChegou = true

// function chegou() {
//     console.log("Pizza chegou");
// }

// function cancelado() {
//     console.log("Pedido cancelado");
// }

// function pedido(callbackSuccess, calbackError) {
//     if(pizzaChegou == true){
//         callbackSuccess()
//     }else{
//         calbackError()
//     }
// }

// pedido(chegou, cancelado)

// const pizzaChegouu = true

// const pedido = new Promise((resolve, reject) => {
//     if(pizzaChegouu == false){
//         resolve("Tudo certo! !!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//     }else{
//         reject("Pedido cancelado !!!!!!!!!!!!!!!!!!")
//     }
// })

// pedido
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))


// let minhaPromise = new Promise((resolve, reject) => {
//     let sucesso = true // Simula sucesso ou erro
//     if(sucesso){
//         resolve("Operação concluída com sucesso")
//     }else{
//         reject("Erro ao processar a operação")
//     }
// })

// minhaPromise
//     .then(() => console.log("beleza"))
//     .catch(() => console.log("Erro"))

const buscarUsuario = new Promise((resolve, reject) => {
    console.log("Buscando usuário no banco...");
    
    setTimeout(()=> {
        const encontrado = true
        if(encontrado){
            resolve([{nome:"Eduardo", idade: 23},{nome:"Joao", idade: 20}])
        }else{
            reject("Usuários não encontrado")
        }
    },3000)
})

buscarUsuario
    .then((res)=> console.log(res[1].nome))
    .catch((err)=> console.log(err))