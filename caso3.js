// 3) Faturamento diário
const fs = require('fs');

fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const faturamento = JSON.parse(data);

    const valoresValidos = faturamento.filter(f => f.valor > 0).map(f => f.valor);
    const menorValor = Math.min(...valoresValidos);
    const maiorValor = Math.max(...valoresValidos);
    const mediaMensal = valoresValidos.reduce((acc, val) => acc + val, 0) / valoresValidos.length;
    const diasAcimaMedia = valoresValidos.filter(valor => valor > mediaMensal).length;

    console.log(`Menor valor de faturamento: ${menorValor}`);
    console.log(`Maior valor de faturamento: ${maiorValor}`);
    console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
});