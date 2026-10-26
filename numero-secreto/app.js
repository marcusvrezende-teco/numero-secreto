let listaSorteados = [];
let quatidadeMaxima = 5;
let usuario = prompt ('Olá! Qual seu nome?');
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `${usuario}, escolha um número entre 1 e 5`);
}
mensagemInicial();


function  verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Oba! Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', "O número secreto é menor");            
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * quatidadeMaxima + 1);
    let quantidadeSorteados = listaSorteados.length;
        if (quantidadeSorteados == quatidadeMaxima) {
            listaSorteados = [];
    }
    if (listaSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    } else {
        listaSorteados.push(numeroSorteado);
        console.log (listaSorteados);
        return numeroSorteado;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}