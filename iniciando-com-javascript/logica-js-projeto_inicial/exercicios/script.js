/*
let porcentagemDesconto = 0;
let quantidadeMilhas = 5001;

if(quantidadeMilhas > 30000){
    porcentagemDesconto = 20;
    console.log(porcentagemDesconto);
} else{
    if(quantidadeMilhas > 5000){
        porcentagemDesconto = 10;
        console.log(porcentagemDesconto);
    } 
}
*/

//desafio

const respostaUsuario = prompt('Qual é o dia da semana?');

if(respostaUsuario == 'Sábado' || respostaUsuario == 'Domingo'){
    alert('Bom fim de semana!')
} else{
    alert('Boa semana!');
}