fetch("http://cafepradev.com.br:21020/animals/list")
    .then(result => result.json())
    .then((data) => {
        console.log(data);
    })
    .catch(erros => console.log(erros))