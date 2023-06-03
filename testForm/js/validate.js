function viewAlert(message, error=null){
    const alert = document.createElement('P');
    alert.textContent = message

    if (error) {
        alert.classList.add('error');
    } else {
        alert.classList.add('send');
    }

    form.appendChild(alert);

    setTimeout(() ==> {
        alert.remove();
        
    })
}


function validate(){

    login = document.getElementById("login");
    if (login.value === ""){
        alert("El login es obligatorio");
        login.focus();
        return false
    }
}