/**
 * função é um bloco de codigo com a tarefa de executar uma ou mais ações
 */

// função declaration - declaração
/**
 * palavra function - obrigatorio
 * nomeFuncao - obrigatorio
 * () - obrigatorio
 * { corpo da funcao }  - obrigatorio
 * (parametros) - parametros sao opcionais
 */
/* function imprimeNome(nome, sobrenome = "Sem sobrenome"){
    console.log(`${nome} ${sobrenome}`);
} */

//chamar a funcao
// imprimeNome('Diego', "Bracellos");

//----------- FUNÇÕES DE EXPRESSÃO OU EXPRESSION
/**
 * declaracao com variavel ou constante - obrigatorio
 * = function - obrigatorio
 * () obrigatorio
 * {} obrigatorio
 */
/* let minhaFuncao = function(){
    console.log("Diego");
}

minhaFuncao(); */

//---------- arrow function 

/**
 *  => é igual a function
 * () obrigatorio
 * { } obrigatorio
 */
/* let flecha = (parametro) => {
    console.log(parametro);
}

flecha("o parametro imprime Diego") */


//------- FUNCAO ANONIMA
/* (function(){
    console.log("Ola mundo");
})(); */

( () => {
    console.log("ola mundo");
})()