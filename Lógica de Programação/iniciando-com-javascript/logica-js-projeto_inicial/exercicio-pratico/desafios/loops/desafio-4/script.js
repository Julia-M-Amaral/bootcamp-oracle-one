//desafio 4 - 03. Loops e tentativas
//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroUsuario = prompt(`Digite um número:`);
let contador = 0;
while(contador <= numeroUsuario){
  console.log(contador);
  contador++;
}