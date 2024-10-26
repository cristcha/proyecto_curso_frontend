function register_user(){

    let nombre = document.getElementById("nombre").value
    let identificacion = document.getElementById("identificacion").value
    let email = document.getElementById("email").value
    let fecha = document.getElementById("fecha").value
    let hora = document.getElementById("hora").value
    let motivo_cita = document.getElementById("motivo_cita").value
    let check_accepted = document.getElementById("check-accepted").checked
    
    let confirmar_vacio = validar_vacio (nombre, identificacion, email, fecha, hora, motivo_cita, check_accepted)

    if(confirmar_vacio == true){
        let confirmar_nombre = validar_texto(nombre)
        let confirmar_identificacion = validar_numero(identificacion)
        let confirmar_correo = validar_email(email)
        let confirmar_fecha = validar_fecha(fecha)
        let confirmar_hora = validar_hora(hora)
        confirmar_texto = false
        confirmar_numero = false

        if(confirmar_nombre == true){
            confirmar_texto = true
            
        }
        else{
            alert("El campo nombre debe contener unicamente letras")
        }
        if(confirmar_identificacion == true){
            confirmar_numero = true
            
        }
        else{
            alert("El campo identificación y teléfono deben contener unicamente numeros")
        }
        if (confirmar_correo == true) {
            // Email válido
        } 
        else {
            alert("El campo email no es válido")
        }
        if (confirmar_fecha ==true) {
            // La fecha es válida
        } else {
        alert("Seleccione una fecha actual o futura");
        }
        if (confirmar_hora == true) {
            // La hora es válida
        } 
        else {
            alert("Seleccione una hora entre 7 AM y 5 PM");
        }
        if(confirmar_texto == true && confirmar_numero == true && confirmar_correo == true && confirmar_fecha ==true && confirmar_hora == true){
            alert("Cita registrada exitosamente")
        }
        else {
            alert("La cita no se registro correctamente")
        }
        
    }
    else{
        alert("Complete todos los campos")
    }
}
function validar_vacio(nombre, identificacion, email, fecha, hora, motivo_cita, check_accepted){
    let confirmar_vacio = true
    if (nombre == ""){
        alert("Debe completar el campo nombre")
        confirmar_vacio = false
    }
    if (identificacion == ""){
        alert("debe completar el campo identificación")
        confirmar_vacio = false
    }
    if (email == ""){
        alert("debe completar el campo email")
        confirmar_vacio = false
    }
    if (fecha == ""){
        alert("debe seleccionar una fecha")
        confirmar_vacio = false
    }
    if (hora == ""){
        alert("debe seleccionar una hora")
        confirmar_vacio = false
    }
    if (motivo_cita == ""){
        alert("debe agregar el motivo de su cita")
        confirmar_vacio = false
    }
    if(check_accepted == ""){
        alert("debe aceptar los terminos y condiciones")
        confirmar_vacio = false
    }
    return confirmar_vacio
}
function validar_texto(campo_texto){
    
    let confirmar_texto = true
    let array_texto = Array.from(campo_texto) 
    for(let i=0; i<array_texto.length; i++){
        if(array_texto[i] == '0' || array_texto[i] == '1'|| array_texto[i] == '2'|| array_texto[i] == '3'|| array_texto[i] == '4'|| array_texto[i] == '5'|| array_texto[i] == '6'|| array_texto[i] == '7'|| array_texto[i] == '8'|| array_texto[i] == '9'){
            confirmar_texto = false
            break
        }
            
    }
    
    return confirmar_texto
}
function validar_numero(campo_numero){
    let confirmar_numero = true
    let array_numero = Array.from(campo_numero)
    for(let i=0; i<array_numero.length; i++){
        if (array_numero[i] == '0' || array_numero[i] == '1' || array_numero[i] == '2' || array_numero[i] == '3' || array_numero[i] == '4' || array_numero[i] == '5' || array_numero[i] == '6' || array_numero[i] == '7' || array_numero[i] == '8' || array_numero[i] == '9') {
            
        }
        else {
            confirmar_numero = false
            break
        }
        
    }
    return confirmar_numero

}
function validar_email(campo_email){
    let tiene_arroba = false;
    let posicion_arroba = -1;

    // Convertimos el email en un array de caracteres
    let array_email = Array.from(campo_email);
    for (let i = 0; i < array_email.length; i++) {
        // Verifica si hay un '@' y que sea único
        if (array_email[i] === '@') {
            if (tiene_arroba) {
                return false; // Si ya había un '@', es inválido
            }
            tiene_arroba = true;
            posicion_arroba = i;
        }
    }

    // Verifica la posición de '@' (ni al principio ni al final)
    if (tiene_arroba && posicion_arroba > 0 && posicion_arroba < array_email.length - 1) {
        return true; // Email válido
    } else {
        return false; // Email inválido
    }
}
function validar_fecha(campo_fecha) {
    // Convertir la fecha seleccionada a un objeto de tipo Date
    let fechaSeleccionada = new Date(campo_fecha);
        // Obtener la fecha actual sin la hora
    let fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
        // Comprobar si la fecha seleccionada es mayor o igual a la fecha actual
    if (fechaSeleccionada >= fechaActual) {
        return true; // La fecha es válida (hoy o futura)
        } 
    else {
        return false; // La fecha es inválida (pasada)
        }
    }
    function validar_hora(campo_hora) {
    // Extraer horas y minutos
    let [hora, minutos] = campo_hora.split(':').map(Number);
    let minutosDesdeMedianoche = hora * 60 + minutos;
    // Definir los límites en minutos desde medianoche
    let inicioEnMinutos = 7 * 60; // 7:00 AM
    let finEnMinutos = 17 * 60;   // 5:00 PM
    // Comprobar si la hora está dentro del rango
    return minutosDesdeMedianoche >= inicioEnMinutos && minutosDesdeMedianoche <= finEnMinutos;
        }