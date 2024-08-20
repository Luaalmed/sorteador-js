function sortear(){
    // pegando os elementos do HTML
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    let sorteados = [];
    let numero;
    
    // Criando laço para repetir o numero de acordo com a quantidade pedida
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        //Verificando se existem números repetidos no sorteio
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de,ate);
        }
        sorteados.push(numero);
    }
    // substituindo o alert e colocando resultado dos números sorteados dentro da página.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML =`<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
}
// função que gera números aleatórios
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}