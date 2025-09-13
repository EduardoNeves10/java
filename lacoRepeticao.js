
// for (let i = 1; i<=10, i++){

// }

// crie um laço for que conte de 1 até 10 e exiba os números no console
// for (i=1; i<11; i++){
//     console.log(`${i}`)
// }

//Use o for para mostrar apenas os números pares de 0 até 20.

// for (i=1; i<=20; i++){
//     if(i%2 == 0){
//         console.log(`${i}`)
//     }
// }

// Mostre no console os números de 10 até 1, um por linha.
// for (i=10; i>=1; i--){    
//     console.log(`${i}`)
// }

// Crie um for que mostre a tabuada do 5, do 5 x 1 até o 5 x 10.

// let variavel = 5

// for (i=1; i<=10; i++){    
//     console.log(`${i}x${variavel}=${i*variavel}`)
// }

// Some todos os números de 1 a 100 usando for.

// No final, mostre o total no console.

// Obs: Resultado deve ser 5050

//  let somaPares = 0 

// for (i=0; i<=100; i++){    
//     console.log(`${somaPares+=i}`)
// }

// Crie um programa que calcule o fatorial de um número. O fatorial de um número é o resultado de multiplicar todos os números inteiros de 1 até esse número.  

// Por exemplo, o fatorial de 5 é:  
// 5! = 5 × 4 × 3 × 2 × 1 = 120

//  let fatorial = 5 

// for (i=5; i>=1; i--){    
//     console.log(`${i} ${fatorial-=i}`)
// }

// Escreva um programa em JavaScript que receba um número N e calcule a soma de todos os números pares entre 1 e N.  
// O programa deve seguir a seguinte lógica:
// O programa vai somar todos os números pares a partir de 2 até N.
// O valor da soma deve ser mostrado no final.
// Exemplo de saída:  
//   Entrada: 10
//   Saída: A soma dos números pares entre 1 e 10 é: 30


//while(condição{})

let senha =prompt ("Informe sua senha: ")
let senhaCorreta ="abc"
let tentativa = 3

while(senha != senhaCorreta && tentativa>0){
    tentativa--
    if(tentativa>0){
        alert(`Senha incorreta, restam apenas ${tentativa} restantes`)
    }else{
        alert("XII, tentativas execidas")
    }
    senha = prompt("informe sua senha novamente: ")
}//html

