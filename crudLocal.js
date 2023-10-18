function list(){
    let base = localStorage.getItem("pessoas");
    let pessoas = JSON.parse(base);

    console.log(pessoas);

    let estrutura = '';
    for(pos in pessoas){
        estrutura += `
        <tr>
            <td>${pessoas[pos].nome}</td>
            <td>${pessoas[pos].email}</td>
            <td>${pessoas[pos].telefone}</td>
            <td>
                <a href="">Editar</a>
                <a href="">Excluir</a>
            </td>
        </tr>
        `
    }

    //carregar dados na tabela
    let tabela = document.querySelector("#carregaDados")
    tabela.innerHTML = estrutura
}

function insert(dados){
    let nomePessoa = dados.nome.value
    let emailPessoa = dados.email.value
    let telefonePessoa = dados.telefone.value

    let pessoa = {
        nome: nomePessoa,
        email: emailPessoa,
        telefone: telefonePessoa
    }
    
    let pessoas = [];
    let base = JSON.parse(localStorage.getItem("pessoas"));

    pessoas.push(pessoa)

    console.log(base);

    //inserindo no localStorage
    localStorage.setItem("pessoas", JSON.stringify(pessoas))
    return true;

}

function update(){

}

function delet(){

}

//CONTROLE DE EVENTOS
const form = document.querySelector('form');
form.addEventListener('submit', function(){
    if(insert(form)){
        alert("Cadastro efetuado com sucesso.")
    }
})

list();