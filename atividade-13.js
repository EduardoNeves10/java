// Escreva um programa em JavaScript que receba um número N e calcule a soma de todos os números pares entre 1 e N.  
// O programa deve seguir a seguinte lógica:
// O programa vai somar todos os números pares a partir de 2 até N.
// O valor da soma deve ser mostrado no final.
// Exemplo de saída:  
//   Entrada: 10
//   Saída: A soma dos números pares entre 1 e 10 é: 30

let num = 10;
let somaNum = 0;

for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        somaNum += i;
    }
}
console.log(somaNum);
