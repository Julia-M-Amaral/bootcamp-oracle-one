//desafio 7 - 04. Boas práticas de programação
//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.


function verificaMaioridade(){
   const idadeUsuario = prompt('Qual a sua idade?');

  const resultado = idadeUsuario >= 18 ? 'Você é maior de idade.' : 'Você é menor de idade.';
  return resultado;
}

console.log(verificaMaioridade());