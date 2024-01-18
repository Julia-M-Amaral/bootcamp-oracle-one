//alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (numeroSecreto != chute) {
    chute = prompt('Escolha um número entre 1 e 10');
    if (numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }

}

if (tentativas > 1) {
    alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativa.`);
}


