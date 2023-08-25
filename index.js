const prompt = require('prompt-sync')();
console.log('Programa que Calcula Valor com Juros Acumulados Mês a Mês');

function calculaJuros() {
	let valorInicial = parseFloat(prompt(`Valor Inicial: `));
	const taxaJuros = parseFloat(prompt('Taxa de Juros (%): ')) / 100;
	const meses = parseInt(prompt('Quantidade de Meses: '));
	let valorComJuros = 0;

	console.log('Mes | Valor com Juros');
	for (let i = 1; i <= meses; i++) {
		valorComJuros = valorInicial + valorInicial * taxaJuros;
		console.log(`${i} | ${valorComJuros.toFixed(2)}`);
		valorInicial = valorComJuros;
	}
}

do {
	calculaJuros();
	var adicional = prompt('Gostaria de adicionar mais algum valor ao investimento? (S / N) ');
} while (adicional.toLowerCase() === 's');

console.log('Encerrando o programa.');
