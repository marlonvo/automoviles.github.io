//obtener modal
var modal = document.getElementById("modal1");

//obtener la imagen y agregarla dentro del modal - usar al texto alternativo "alt" como subtitulo
var img = document.getElementById("myImg");

var modalImg = document.getElementById("img01");

var captionText = document.getElementById("caption");


// al dar click a la foto en pequeno
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


//obtenga el elemento <span> que cierre el model
var cerrar = document.getElementsByClassName("close")[0];

//cuando el usuario hace click en span (x), cierre el modal
cerrar.onclick = function() {
    modal.style.display = "none";
}