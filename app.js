function sortear(){
    // pegando os elementos do HTML
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // verifica se o valor de "de" é maior ou igual ao valor de "ate"
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        // sai da função se a condição acima for verdadeira
        return;
      }
    // cria um array vazio para armazenar os números sorteados.
    let sorteados = [];
    let numero;
    
    // Criando laço para repetir o numero de acordo com a quantidade pedida
    for (let i = 0; i < quantidade; i++) {
        //obtem um numero aleatorio dentro do intervalo
        numero = obterNumeroAleatorio(de, ate);

        //Verificando se existem números repetidos no sorteio
        while (sorteados.includes(numero)){
            // se ja foi sorteado, obtém um novo número aleatório
            numero = obterNumeroAleatorio(de,ate);
        }
        //adiciona o número sorteado ao array
        sorteados.push(numero);
    }
    // substituindo o alert e colocando resultado dos números sorteados dentro da página.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML =`<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    // chama a função para alterar o status do botão
    alterarStatusBotao();
}
// função que gera números aleatórios dentro de um intervalo
function obterNumeroAleatorio(min, max) {
    // Gera um número aleatório, arredonda para baixo e ajusta ao intervalo [min, max]
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Função para alterar o status do botão
function alterarStatusBotao() {
    // Obtém o elemento do botão
    let botao = document.getElementById('btn-reiniciar');
     // Verifica se o botão possui a classe 'container__botao-desabilitado'
    if (botao.classList.contains('container__botao-desabilitado')) {
        // Remove a classe 'container__botao-desabilitado' e adiciona a classe 'container__botao'
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');
    } else {
         // Caso contrário, remove a classe 'container__botao' e adiciona a classe 'container__botao-desabilitado'
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
    }
}
// Função para reiniciar os campos do formulário e o resultado
    function reiniciar() {
       // Limpa os valores dos campos de entrada 
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        // Reseta o conteúdo do elemento 'resultado'
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
        // Reseta o conteúdo do elemento 'resultado'
        alterarStatusBotao();
}
    
