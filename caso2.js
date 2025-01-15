// 2) Verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    let a = 0, b = 1;
    while (b <= num) {
        if (b === num) return true;
        [a, b] = [b, a + b];
    }
    return false;
}

const number = 21; // Número pré definido
if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}