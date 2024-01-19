//desafio 8 - 04. Boas práticas de programação
//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

function verificaSeEPosNegZero(){
  const numero = prompt('Digite um número para verificar se é positivo, negativo ou neutro.')

  const resposta = 
   numero > 0 ? 'Número é positivo.' :
   numero < 0 ? 'Número é negativo.' :
   'Número é neutro (0).'

   alert(resposta);
}

verificaSeEPosNegZero();