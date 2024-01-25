let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = (texto);
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`

    exibirTextoNaTela('h1', 'Acertou!')
    exibirTextoNaTela('p', mensagemTentativa)

  } else {
    if (chute > numeroSecreto) {
      console.log()
      exibirTextoNaTela('p', 'O número secreto é menor!')
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior!')
    }
    tentativas++;
    limparCampo()
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}