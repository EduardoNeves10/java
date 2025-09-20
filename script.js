let titulo = document.getElementById("titulo")

let paragrafoOne= document.getElementById("paragrafoOne")
let paragrafoTwo = document.getElementById("paragrafoTwo")

let p1 = document.getElementsByClassName("box")
console.log(p1[0])// p1 p2

let imgs = document.getElementById("imgs")

titulo.innerText = ("troquei")
paragrafoOne.innerText = ("para1")
paragrafoTwo.innerText = ("para2")
imgs.src = "https://tse1.mm.bing.net/th/id/OIP.NPAHkUljopz4kthyA0WLhQHaEq?rs=1&pid=ImgDetMain&o=7&rm=3"

titulo.style.color ="red" //mudar cor do textos
titulo.style.fontSize ="30px" //alterar o tamanho da fonte
titulo.style.background ="aqua" //alterar o fundo

let mensagem = document.getElementById("mensagem")
mensagem.style.color ="green"
mensagem.style.fontSize ="50px"
mensagem.style.background="red"
mensagem.style.borderRadius="10px"



let button = document.getElementById("btn")

// button.onclick = function(){
//     alert("clicou")

// }

button.addEventListener("click", function(){
    mensagem.style.borderRadius="10px"
})

let exec23 = document.getElementById("exec") 

button.addEventListener("click", function(){
    exec23.innerText=("texto alterado com sucesso")
})


let exec24 = document.getElementById("21")

exec24.style.width="200px"  
exec24.style.height="100px"  
exec24.style.backgroundColor="lightgray"  

button.addEventListener("mouseover", function(){
    exec24.style.backgroundColor="yellow"
})

// let form = document.getElementById("meuFormulario")

// form.addEventListener("submit", funcion(e){
//     e.preventDefauly()
//     console.log("Formulario enviado")
    
// })

document.addEventListener("keydown", function(e){
    alert(e.key)
})