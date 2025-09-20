// Crie um programa que calcule o fatorial de um número. O fatorial de um número é o resultado de multiplicar todos os números inteiros de 1 até esse número.  

// Por exemplo, o fatorial de 5 é:  
// 5! = 5 × 4 × 3 × 2 × 1 = 120

let fatorial = 5;
let num = fatorial - 1;

for (let i = num; i >= 1; i--) {
    fatorial = fatorial * i;
}
console.log(fatorial);
