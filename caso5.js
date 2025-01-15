// 5) Inversão de string
function inverterString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

const stringOriginal = "roinuJ ziuL odraciR";
console.log(`String invertida: ${inverterString(stringOriginal)}`);