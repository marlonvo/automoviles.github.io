//asignaciones id
const listatweets = document.querySelector('#lista-comentarios');
const formulario = document.querySelector('#formulario');

//varibales definidas con let no se pueden volver a declarar
//arreglo con let
let tweets = [];

//llamada la funcion evenListerners
evenListerners();

//carga de funcion
function evenListerners() {
    //funcion que permite enviar los comentarios al formulario
    formulario.addEventListener('submit', agregarTweet);
    //funcion que permite borrar comentarios
    listatweets.addEventListener('click', borrarTweet);
    //contenido cargado 
    //sirve para realizar acciones cuando un DOM ha terminado de cargar y se encuentra listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        //consol.log(tweets);
        crearHTML();
    });
}

//anadir comentarios al formulario
function agregarTweet(e) {
    e.preventDefault();

    //leer funcion del textarea
    const tweet = document.querySelector('#tweet').value
        //mostarerror('un mensaje no puede ir vacio');
    if (tweet === '') {
        Swal.fire({
            icon: 'error',
            title: 'Atencion usuario',
            text: 'NO EXISTEN COMENTARIOS'
        });
        return;
    }

    //creae un objeto tweet
    const tweetObj = {
        id: Date.now(),
        texto: tweet
    }

    //anadir a mis tweets usando la constante
    tweets = [...tweets, tweetObj];

    //una vez agregado , mandamos renderizar nuestro html
    crearHTML();

    //reiniciar el formulario
    formulario.reset();
}


//funcion error

function mostrarError(error) {
    const mensajeError = documen.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //revisar ek id que esta en la hoja de estilo custom.css
    const contenido = document.querySelector('#contenido');

    //permite ejecutar un fragmento de un codigo , una vez transcurrido el tiempo determindao
    setTimeout(() => {
        mensajeError.remove();

    }, 3000);
}

//carga funcion crearHTML (contenido de la caja de comentarios)

function crearHTML() {
    limpiarHTML();
    //si la longitud de tweets es mayor a 0 ejecuta el ciclo forEach
    if (tweets.length > 0) {
        tweets.forEach(tweet => {

            //crear boton de eliminar
            const botonBorrar = document.createElement('a');
            //buscar la clase borrar-tweet em la hoja de estilo llamado custom.css
            botonBorrar.classList = 'borrar-tweet';
            //innerText devuelve el contenido de texto de un elemento
            //botonBorrar.innerText = 'X';

            //crear un elemento y anadirle el contenido a la lista
            const li = document.createElement('li');

            //anadir texto
            li.innerText = tweet.texto;

            //anadir el boton de borrar tweet
            li.appendChild(botonBorrar);

            //anadir un atrivuto unico
            li.dataset.tweetId = tweet.id;

            //anade el comentario a la lista
            listatweets.appendChild(li);
        });
    }

    //cargar la funcion llamada que permite agreagar los elementos al localstorage
    sincronizarStorage();
}

//eliminar el comentario DOM
function borrarTweet(e) {
    //preventDefaut es un metodo que permite cambiar la accion al borrar un tweet
    e.preventDefault();
    const id = e.target.parentElement.dataset.tweetId;
    tweets = tweets.filter(tweet => tweet.id != id);
    crearHTML();
}

//agregar comentarios a localstorage usando json
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//elimina los comentarios del campo textarea
function limpiarHTML() {
    while (listatweets.firstChild) {
        listatweets.removeChild(listatweets.firstChild);
    }
}