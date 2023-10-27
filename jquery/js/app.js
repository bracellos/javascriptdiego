//iniciando escopo do jquery
$(function() {
    //manipular um evento
    // on(evento, seletor, callback)
    $(document).on("click", ".meuLink", function(){
        $('.meuLink').removeClass('ativo')
        $(this).addClass('ativo')
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

    //aumentar caixinha
    $(document).on('click', '.clicaBloco', function(){
        //mudar a cor
        $('.bloco').css({
            'background-color' : 'black',
            'border-radius' : '5px'
        })

        $('.bloco').show() //fadeOut //hide
        
        //aumentar caixa
        let largura = $('.bloco').width()
        $('.bloco').animate({
            width: largura += 100
        },1000)

        return false;
    })

    //funcao de carregamento das views
    let loadView = (page = 'home.html') => {
        $('.container').load(`view/${page}`, function(){
            $('.cpf').mask('000.000.000-00')
        })
    }

    //CHAMAR LOADVIEW
    loadView()


    //consumir api com jquery
    $.ajax({
        url : 'http://cafepradev.com.br:21020/messages/list',
        contentType : 'json',
        success : function(dados){
            console.log(dados)
        }
    })


    

})