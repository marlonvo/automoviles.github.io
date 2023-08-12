function enviar() {
    var name = document.getElementById("nombre").value;
    var cel = document.getElementById("celular").value;
    var email = document.getElementById("correo").value;
    var gene = document.getElementById("genero").value;
    var consul = document.getElementById("consulta").value;

    if (name == "" || cel == "" || email == "" || gene == "" || consul == "") {
        Swal.fire({
            title: 'Atención',
            icon: 'error',
            iconColor: 'red',
            text: 'Existen campos vacios porfavor intente de nuevo.',
        })
    } else {
        Swal.fire({
            title: 'Felicitaciones se ha enviado con exito',
            html: '<iframe src="https://embed.lottiefiles.com/animation/117716"></iframe>',

        })
    }
}

function borrar() {
    document.getElementById("nombre").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("consulta").value = "";
}