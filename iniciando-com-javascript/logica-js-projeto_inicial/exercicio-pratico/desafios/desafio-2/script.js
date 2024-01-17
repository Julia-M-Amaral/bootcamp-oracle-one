//desafio 2 - 02. Condicionais e Concatenação
//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

const numUsuario = prompt('Digite um número para verificarmos se é neutro, positivo ou negativo!');
if (numUsuario == 0) {
    alert(`O número ${numUsuario} é neutro!`);
} else if (numUsuario > 0) {
    alert(`O número ${numUsuario} é positivo!`);
} else {
    alert(`O número ${numUsuario} é negativo!`);
}