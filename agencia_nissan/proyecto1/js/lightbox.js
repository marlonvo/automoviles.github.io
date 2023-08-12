window.onload = function() {
    document.getElementById("output-img").innerHTML = "<img src='imagenes/patrocinadores.jpg' class='img-fluid rounded' alt='logo' />";

    //evento de eleccion de opciones onchange
    document.getElementById("autos").onchange = function(e) {
        n = e.target.value;
        //variable contiene todas la imagenes
        let imagen = "<img src='imagenes/combo/" + n + ".jpg' class='omg-fluid img-thumbnail rounded' alt='estadio' />";
        //variable que contiene todo el contenido textual de cada foto
        let text = ["ciudad : La Sabana - Costa Rica", "ciudad : Curridabat - Costa Rica", "ciudad : Paseo Metropoli de Cartago - Costa Rica", "ciudad : Licon plaza de Moravia - Costa Rica"];

        document.getElementById("output-img").innerHTML = imagen;
        document.getElementById("output-txt").innerHTML = text[n - 1];

    };
};

//permite restablecer la imagen original
document.getElementById("btn-clean").onclick = function() {
    document.getElementById("output-img").innerHTML = "<img src='imagenes/patrocinadores.jpg' class='img-fluid rounded' alt='logo' />";
    document.getElementById("output-txt").innerHTML = "";
    document.getElementById("autos").value = "";
}