function validate(){

    login = document.getElementById("login");
    if (login.value === ""){
        alert("El login es obligatorio");
        login.focus();
        return false;
    }

    expLogin = /^[A-Z]{5,18}$/;
    if (!expLogin.test(login.value)){
        alert("Solo letras mayusculas entre 5 y 18 caracteres");
        login.focus();
        return false;
    }

    clave = document.getElementById("clave");
    if (clave.value == ""){
        alert("La clave es obligatoria");
        clave.focus();
        return false;
    }
    
    reClave = document.getElementById("reClave");
    if (reclave.value == ""){
        alert("La reclave es obligatoria");
        reClave.focus();
        return false;
    }

    nombre = document.getElementById("nombre");
    if (nombre.value == ""){
        alert("El nombre es obligatorio");
        nombre.focus();
        return false;
    }

    direccion = document.getElementById("direccion");
    if (direccion.value == ""){
        alert("La direccion es obligatoria");
        direccion.focus();
        return false;
    }

    edad = document.getElementById("edad");
    if (edad.value == ""){
        alert("La edad es obligatoria");
        edad.focus();
        return false;
    }

    email = document.getElementById("email");
    if (email.value == ""){
        alert("El email es obligatorio");
        email.focus()
        return false;
    }

    hobbies = document.getElementsByTagName("hobbies");
    cont = 0
    for (i = 0; i < hobbies.length; i++){
        if (hobbies[i].checked){
            cont++
        }
    }
    if (cont > 3){
        alert("Seleccione maximo 3 hobbies");
        return false
    }

    genero = document.getElementsByName("genero")
    seleccionado = false;
    for (i = 0; i < genero.length; i++){
        if (genero[i].cheked){
            seleccionado = true;
            break;
        }
    }
    if (seleccionado == false){
        alert("El genero es obligatorio");
        return false;
    }
}