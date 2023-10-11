/* 
obj = {
    propriedade : valor
} */
let carro = {
    modelo : "Megane Grand Tour Privilege",
    ano : 2009,
    cor : "Beje",
    registro : {
        chassi : "GDFKDFDO34309R9394389DF",
        placa : "MMM-2C20",
        renavam : "12345678908"
    }
}


let carros = [
    carro
];
console.log(carros);

carros.push({
    modelo : "Porche Carrara",
    ano : 2022,
    cor : "Preto",
    registro : {
        chassi : "GDFKDFDO34309R9394389DF",
        placa : "MMM-2C20",
        renavam : "12345678908"
    }
})

console.log(carros);