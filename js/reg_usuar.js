function register_user(){

    let nombre = document.getElementById("nombre").value
    let identificacion = document.getElementById("identificacion").value
    let email = document.getElementById("email").value
    let telefono = document.getElementById("telephone").value
    let direccion = document.getElementById("direccion").value
    let contrasena = document.getElementById("passw").value
    let check_accepted = document.getElementById("check-accepted").checked
    
    let confirmar_vacio = validar_vacio (nombre, identificacion, email, telefono, direccion, contrasena, check_accepted)

    if(confirmar_vacio == true){
        
        let confirmar_nombre = validar_texto(nombre)
        let confirmar_identificacion = validar_numero(identificacion)
        let confirmar_telefono = validar_numero(telefono)
        let confirmar_correo = validar_email(email)
        let confirmar_direccion = validar_direccion(direccion)
        console.log("Dirección ingresada:", direccion);
        let confirmar_contrasena = validar_contrasena(contrasena)
        console.log("CONTRASEÑA ingresada:", contrasena);
        confirmar_texto = false
        confirmar_numero = false
       

        if(confirmar_nombre == true){
            confirmar_texto = true
            
        }
        else{
            alert("El campo nombre debe contener unicamente letras")
        }
        if(confirmar_identificacion == true && confirmar_telefono == true){
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
        if (confirmar_direccion == true) {
            // Dirección válida
        } 
        else {
            alert("El campo dirección contiene caracteres inválidos")
        }
        if(confirmar_contrasena == true){
        }
        else{
            ("La contraseña no cumple con los criterios")
        }
        if (confirmar_texto == true && confirmar_numero == true && confirmar_contrasena == true) {
            alert("Usuario creado exitosamente")
        }
        else {
            alert("Error creando usuario")
        }        
        


    }
    else{
        alert("Complete todos los campos")
    }

}
function validar_vacio(nombre, identificacion, email, telefono, direccion, contrasena, check_accepted){
    let confirmar_vacio = true
    if (nombre == ""){
        alert("Debe completar el campo nombre")
        confirmar_vacio = false
    }
    if (identificacion == ""){
        alert("debe completar el campo identificacién")
        confirmar_vacio = false
    }
    if (email == ""){
        alert("debe completar el campo email")
        confirmar_vacio = false
    }
    if (telefono == ""){
        alert("debe completar el campo teléfono")
        confirmar_vacio = false
    }
    if (direccion == ""){
        alert("debe completar el campo dirección")
        confirmar_vacio = false
    }
    if (contrasena == ""){
        alert("debe completar el campo contraseña")
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
function validar_direccion(campo_direccion) {
    
    // Convertir a string en caso de que el valor no lo sea
    let direccion = String(campo_direccion);
    
    // Permitir solo letras, números, espacios y caracteres específicos para direcciones
    const caracteres_validos = /^[a-zA-Z0-9\s#\-.]+$/;

    // Verifica que la dirección tenga caracteres válidos
    return caracteres_validos.test(direccion);
}
function validar_contrasena(contrasena_campo) {
    let confirmar_contrasena = false
    let confirmar_cantidad = true
    let confirmar_numero = false
    let confirmar_texto_mayusc = false
    let confirmar_texto_minusc = false
    let array_contrasena = Array.from(contrasena_campo)
    if (array_contrasena.length > 8) {
        for(let i=0; i<array_contrasena.length; i++){
            if (array_contrasena[i] == '0' || array_contrasena[i] == '1' || array_contrasena[i] == '2' || array_contrasena[i] == '3' || array_contrasena[i] == '4' || array_contrasena[i] == '5' || array_contrasena[i] == '6' || array_contrasena[i] == '7' || array_contrasena[i] == '8' || array_contrasena[i] == '9') {
                confirmar_numero = true
                break
            }
        }  
        for(let i=0; i<array_contrasena.length; i++){
            if (array_contrasena[i] == '0' || array_contrasena[i] == '1' || array_contrasena[i] == '2' || array_contrasena[i] == '3' || array_contrasena[i] == '4' || array_contrasena[i] == '5' || array_contrasena[i] == '6' || array_contrasena[i] == '7' || array_contrasena[i] == '8' || array_contrasena[i] == '9') {
                
            }
            else {
                if (array_contrasena[i] == array_contrasena[i].toUpperCase()) {
                    confirmar_texto_mayusc = true
                }
                if (array_contrasena[i] == array_contrasena[i].toLowerCase()) {
                    confirmar_texto_minusc = true
                }               
                if (confirmar_texto_mayusc==true && confirmar_texto_minusc==true) {
                    break
                }                
            }
        }                                            
    }
    else {
        alert("La contraseña debe tener al menos 8 caracteres")
        confirmar_cantidad = false
    }

    if (confirmar_numero == false) {
        alert("La contraseña debe contener al menos un número")
    }
    if (confirmar_texto_mayusc == false) {
        alert("La contraseña debe contener al menos una mayuscula")
    }
    if (confirmar_texto_minusc == false) {
        alert("La contraseña debe contener al menos una minuscula")
    }

    if (confirmar_numero == true && confirmar_texto_mayusc==true && confirmar_texto_minusc==true) {
        confirmar_contrasena = true
    }
    return confirmar_contrasena
}

