const prompt = require('prompt-sync')();

//funcoes de agendamento
//executa uma vez após atingir o tempo
/* setTimeout(function(){
    console.log("QUASE NO FIM DA AULA");
}, 4000)

setTimeout(frase, 2000)

function frase(){
    console.log("exemplo com funcao por fora");
} */

//setInterval - executa repetetivamente quando atinge o tempo

/* setInterval(function(){
    console.log("PROFESSOR LINDO");
}, 3000) */


//FUNÇÕES DE STRING

//LENGTH - PEGA O TAMANHO DA STRING
let str = "Qual o tamanho da minha STRING";
// console.log( str.length );

//indexof - procurar a ocorrencia de um pedaço de string, caractere da string
// console.log( str.indexOf("o"));

//slice - corta uma string
// console.log( str.slice(5));

//tolowercase - transforma a string em letras minusculas
// console.log( str.toLowerCase());

//touppercase - converte tudo para maiusculo
// console.log( str.toUpperCase());

//replace() - troca uma ocorrencia da string
// console.log( str.replace("da minha STRING", "do meu texto"));

//-------------- metodos para tratamento de numeros
// parseint - converte um numero que esta em formato de string para inteiro
// let numero = parseInt(prompt("Digite um numero: "))
// let numero2 = parseInt(prompt("Digite um numero: "))

// console.log("O resultado da operação é", numero + numero2);

//parsefloat - converte numero string para flaot 100.50
let n1 = 200.105; 
let n2 = 387.99454545;

// console.log(parseFloat(n1) + parseFloat(n2));

//tofixed - limita o numero de casas decimais
// console.log( n1.toFixed(2));

//toprecision

console.log(n1.toPrecision(3))

//tostring - converte dados em string
let numero = 200 + 400;
console.log(numero);
console.log( numero.toString());

numero2 = numero.toString()
console.log(typeof(numero2));




