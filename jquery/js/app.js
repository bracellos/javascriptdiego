//iniciando escopo do jquery
$(function() {
    //manipular um evento
    // on(evento, seletor, callback)
    $(document).on("click", ".meuLink", function(){
        let caminho = $(this).attr('href')
        let id = $(this).attr('data-id', 200)
        console.log(id);
        loadView(caminho)
        return false;
    })

    //controlar evento do form de lista de compras
    $(document).on("submit", "#cadastraItem", function(){
        let item = $(this).find('input').val()
        
        //adicionar um item na lista
        $('.listaMercado').prepend(`<li>${item} <a href="#" class="deletaItem">X</a></li>`)
        return false;
    })

    //remover um item da lista
    $(document).on('click', '.deletaItem', function(){
        $(this).parent().remove()
        return false;
    })

    //funcao de carregamento das views
    let loadView = (page = 'home.html') => {
        $('.container').load(`view/${page}`)
    }

    //CHAMAR LOADVIEW
    loadView()

})