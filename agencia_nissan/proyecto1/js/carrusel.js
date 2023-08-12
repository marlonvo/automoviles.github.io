var foto = 0;
var micarrusel = {};
var total = 0;

//arreglos para cargar las imagenes y titulos de cada foto
micarrusel = [{ imageurl: "imagenes/1.jpg", titulo: "Frontier" }, { imageurl: "imagenes/2.jpg", titulo: "Versa" }, { imageurl: "imagenes/3.jpg", titulo: "Sentra" }, { imageurl: "imagenes/4.jpg", titulo: "Kicks" }];

//fincion que permite cambiar las imagenes (anterior , siguiente)
var cambiar = function(mas) {
    //almacena la cantidad total de las imagenes
    total = micarrusel.length;
    foto = foto + mas;

    //condicoones para determinar las imagenes a presentar
    if (foto > total) {
        foto = 1
    }
    if (foto < 1) {
        foto = total;
    }
    //instrucciones que apuntan a cada imagen y titulo
    //micarrusel es arreglo que tiene las fotos y titulos ...
    document.thumb.src = micarrusel[foto - 1].imageurl;
    titulo = document.getElementById('titulo');
    titulo.innerText = micarrusel[foto - 1].titulo;

}