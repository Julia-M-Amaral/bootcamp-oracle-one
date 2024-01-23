//desafio 3 - 02. Condicionais e Concatenação
//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

const pontuacaoUsuario = prompt('Qual foi a sua pontuação?');
if (pontuacaoUsuario >= 100){
    alert('Parabéns, você venceu :)');
} else{
    alert('Tente novamente para ganhar :(');
}