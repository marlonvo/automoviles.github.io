window.onload = function() {
    document.getElementById("modelo").onchange = function(e) {
        a = e.target.value;
        if (a == "Sentra") {
            var imagen = "imagenes/sentra.png";
        } else if (a == "Kicks") {
            var imagen = "imagenes/kicks.jpg";
        } else if (a == "Versa") {
            var imagen = "imagenes/versaa.jpg";
        } else if (a == "Frontier") {
            var imagen = "imagenes/fronteir.png";
        }

        document.getElementById("imagen").src = imagen;

    }
    document.getElementById("version").onchange = function(es) {
        n = es.target.value;
    }
}

function calcular() {
    if (document.getElementById("modelo").value == "Seleccione un modelo:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            iconColor: 'red',
            html: '<p class="formatos1"> Seleccione el modelo del carro... </p> '
        })
    } else {
        if (document.getElementById("version").value == "Seleccione la transmision:") {
            swal.fire({
                icon: "info",
                title: "Atención",
                iconColor: 'red',
                html: '<p class="formatos1"> Seleccione la transmision del carro... </p> '
            })
        } else {
            var montoCuota = 0;
            if (a == "Sentra") {
                if (n == "automatico") {
                    montoCuota = 11000;
                    swal.fire({
                        imageUrl: "imagenes/sentra.png",
                        html: "<p> Mira el precio del Sentra con transmision automatica <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Vehiculo sentra",
                    })
                } else {
                    montoCuota = 11500;
                    swal.fire({
                        imageUrl: "imagenes/sentra.png",
                        html: "<p>Mira el precio del Sentra con transmision manual <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Vehiculo Sentra ",
                    })
                }
            } else if (a == "Kicks") {
                if (n == "automatico") {
                    montoCuota = 10400;
                    swal.fire({
                        html: "<p> Mira el precio del Kicks con transmision automatica <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/kicks.jpg",
                        imageWidth: 400,
                        imageHeight: 300,
                        imageAlt: "Vehiculo Kicks",
                    })
                } else {
                    montoCuota = 10700;
                    swal.fire({
                        html: "<p>Mira el precio del del Kicks con transmision manual <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/kicks.jpg",
                        imageWidth: 400,
                        imageHeight: 300,
                        imageAlt: "Vehiculo Kicks",
                    })
                }
            } else if (a == "Versa") {
                if (n == "automatico") {
                    montoCuota = 13800;
                    swal.fire({
                        html: "<p> Mira el precio del Versa con transmision automatica <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/versaa.jpg",
                        imageWidth: 300,
                        imageHeight: 200,
                        imageAlt: "Vehiculo Versa",
                    })
                } else {
                    montoCuota = 12400;
                    swal.fire({
                        html: "<p>Mira el precio del Versa con transmision manual <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/versaa.jpg",
                        imageWidth: 300,
                        imageHeight: 200,
                        imageAlt: "Vehiculo Versa",
                    })
                }
            } else if (a == "Frontier") {
                if (n == "automatico") {
                    montoCuota = 15400;
                    swal.fire({
                        html: "<p> Mira el precio del Frontier con transmision automatico <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/fronteir.png",
                        imageWidth: 600,
                        imageHeight: 300,
                        imageAlt: "Vehiculo Frontier",
                    })
                } else {
                    montoCuota = 15900;
                    swal.fire({
                        html: "<p>Mira el precio del Frontier con transmision manual <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/fronteir.png",
                        imageWidth: 600,
                        imageHeight: 300,
                        imageAlt: "Vehiculo Frontier",
                    })
                }
            }
        }
    }
}