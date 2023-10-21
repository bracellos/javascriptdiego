/**
 * verbos http
 * GET -> trazer dados (padrão)
 * POST -> enviar dados
 * PUT -> editar dados
 * DELETE -> deletar dados
 */
//selecionar o elemento pra manipular o evento change
const selEstados = document.querySelector('#estado');

//adicionando o evento change ao select
selEstados.addEventListener("change", function(){
    //retorna o estado selecionado - atributo value
    let selecionado = this.value //this significa este
    
    //consultar a api
    let estrutura = '<option value="">Selecione</option>'

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selecionado}/municipios`)
        .then(retorno => retorno.json()) // return retorno.json()
        .then(function(cidades){
            
            //laço de repeticao para preencher as cidades
            for(posicao in cidades){
                estrutura += `<option value="${cidades[posicao].cidades}">${cidades[posicao].nome}</option>`
            }

            //carregar dados no select
            document.querySelector("#cidade").innerHTML = estrutura
        })
})