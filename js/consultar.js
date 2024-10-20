function validar_numero() {
    let identificacion = Array.from(document.querySelector('#id').value)
    let confirmar_numero

    if (identificacion.length > 0) {
        confirmar_numero = true
        for (let i = 0; i < identificacion.length; i++) {
            let numero = parseInt(identificacion[i])
            if (numero >= 0 || numero <= 9) {
            } else {
                alert("Solo se admiten números")
                confirmar_numero = false
                break
            }
        }
    }


    if (confirmar_numero == true) {
        window.location.href = "consultaUsuario.html"
        alert("Seras redirigido")
    }
}
function validar_codigo() {
    let codigo = Array.from(document.querySelector('#codigo').value)
    let confirmar_codigo

    if (codigo.length == 6) {
        confirmar_codigo = true

        /*El código debe empezar por F o M*/
        /*
            M = Consultas
            F = Otros tipos de cita
        */
        if (codigo[0].toUpperCase() == "M" || codigo[0].toUpperCase() == "F") {
            /*
                Por defecto el segundo caracter del código debe ser la letra I
            */
            if (codigo[1].toUpperCase() == "I") {

                /*
                * Se valida que el resto de caracteres sean números
                */

                /** como ya validamos los primeros dos caracteres empezamos desde el tercer campo del array */
                for (let i = 2; i < codigo.length; i++) {
                    if (codigo[i] >= 0 || codigo[i] <= 9) {
                    } else {
                        alert("No es un código valido")
                        confirmar_codigo = false
                    }
                }
                
            } else {
                alert("No es un código valido")
                confirmar_codigo = false
            }
        } else {
            alert("No es un código valido")
            confirmar_codigo = false
        }
    } else {
        alert("Código no contiene una cantidad de caracteres valida")
        confirmar_codigo = false
    }

    if (confirmar_codigo == true) {
        window.location.href = "consultaCita.html"
        alert("Seras redirigido")
    }
}
