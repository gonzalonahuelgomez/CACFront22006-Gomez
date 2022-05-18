document.getElementById('form-selector').onsubmit = submit

function submit(event){
    let userInput = document.getElementById('user').value
    let passwInput = document.getElementById('password').value
    if(userInput.length === 0 || passwInput.length === 0) {
        event.preventDefault()
        alert("El usuario o clave se encuentra vacío") 
    }
    if(!userInput.includes('@')) {
        event.preventDefault()
        alert("Falta el arroba en el usuario")
    }
}