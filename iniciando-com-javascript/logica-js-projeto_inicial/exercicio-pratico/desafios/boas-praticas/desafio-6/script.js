//desafio 6 - 04. Boas práticas de programação
//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.


function subtração(valor1, valor2){
  const subtração = valor1 - valor2;
  return subtração;
}

const valor1 = 6;
const valor2 = 3;
const resultado = subtração(valor1, valor2);

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);


