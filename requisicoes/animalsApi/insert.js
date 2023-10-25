//inserir nova mensagem na api

fetch("http://cafepradev.com.br:21020/animals/insert", {
    method : "POST", //POST, PUT, DELETE
    headers : {
        "Content-type" : "application/json; charset=UTF-8"
    },
    body : JSON.stringify({
        "name": "Xablau",
        "species": "Dinossauro",
        "color": "Black",
        "size": "Small"
    }) 
})
    .then(response => response.json())
    .then((res) => {
        console.log(res);
        if(res.error){
            console.log(res.error.message);
        }else{
            console.log(res.message);
        }

})
    .catch( (err) => {
        console.log(err);
    })