let cepField = document.querySelector("#cep")

let preencher = (seletor, valor) => {
    document.querySelector(seletor).value = valor
}

cepField.addEventListener("keyup", function(){
    
    if(cepField.value.length === 8){
        
        fetch(`https://viacep.com.br/ws/${cepField.value}/json/`)
            .then(dados => dados.json())
            .then(function(dados){
                //preenchendo os dados nos campos
                console.log(dados);
                preencher("#logradouro", dados.logradouro)
                preencher("#bairro", dados.bairro)
                preencher("#cidade", dados.localidade)
                preencher("#estado", dados.uf)
            })
            .catch(new Error("Não foi possível consultar os dados"))
    }
})