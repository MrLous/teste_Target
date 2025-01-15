# Projetos de Algoritmos em JavaScript

Este repositório contém a resolução de cinco desafios de programação em JavaScript, abordando diferentes conceitos e aplicações. Os algoritmos são:

1. **Cálculo de Soma Progressiva**
   - **Descrição**: Dado um trecho de código, calcular o valor final de uma variável após o processamento de um loop.
   - **Resultados**: Soma acumulada de 1 até o valor de `INDICE`.

2. **Verificação de Número na Sequência de Fibonacci**
   - **Descrição**: Verificar se um número pertence à sequência de Fibonacci, que se inicia em 0 e 1, com cada termo sendo a soma dos dois anteriores.
   - **Resultados**: Mensagem indicando se o número informado está ou não na sequência.

3. **Análise de Faturamento Diário**
   - **Descrição**: Processar um arquivo JSON contendo os valores de faturamento diário e:
     - Determinar o menor e o maior valor de faturamento.
     - Calcular a média mensal, ignorando dias sem faturamento.
     - Contar o número de dias com faturamento acima da média.
   - **Resultados**: Valores mínimo, máximo, média mensal e dias acima da média.

4. **Percentual de Faturamento Mensal por Estado**
   - **Descrição**: Dado o faturamento mensal de uma distribuidora por estado, calcular o percentual de representação de cada estado no total mensal.
   - **Resultados**: Percentuais de cada estado formatados com duas casas decimais.

5. **Inversão de String**
   - **Descrição**: Implementar um algoritmo para inverter os caracteres de uma string sem usar funções prontas como `reverse`.
   - **Resultados**: String invertida apresentada no console.

## Como Utilizar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seuusuario/projetos-algoritmos-javascript.git
   cd projetos-algoritmos-javascript
   ```

2. **Instale as dependências (se necessário):**
   Alguns algoritmos requerem o Node.js para a execução. Certifique-se de que ele está instalado.

3. **Prepare o ambiente:**
   - Certifique-se de que o arquivo `dados.json` está na raiz do projeto.

4. **Execute os algoritmos:**
   ```bash
   node casoX.js
   ```
   Substitua `X` pelo número do caso desejado.

## Estrutura do Projeto
- `caso1.js`: Implementação do cálculo de soma progressiva.
- `caso2.js`: Verificação de número na sequência de Fibonacci.
- `caso3.js`: Análise de faturamento diário com base em `dados.json`.
- `caso4.js`: Cálculo do percentual de faturamento mensal por estado.
- `caso5.js`: Algoritmo de inversão de string.
- `dados.json`: Arquivo JSON utilizado no caso do faturamento diário.

## Exemplo do Arquivo `dados.json`
```json
[
  { "dia": 1, "valor": 22174.1664 },
  { "dia": 2, "valor": 24537.6698 },
  { "dia": 3, "valor": 26139.6134 },
  { "dia": 4, "valor": 0.0 }
]
```
