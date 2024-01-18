//desafio 1 - 02. Condicionais e Concatenação
//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

const respostaUsuario = prompt('Qual é o dia da semana?');
if(respostaUsuario == 'Sábado' || respostaUsuario == 'Domingo'){
    alert('Bom fim de semana!')
} else{
    alert('Boa semana!');
}