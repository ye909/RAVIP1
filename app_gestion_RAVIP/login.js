const loginForm = document.getElementById('loginForm');
const password = document.getElementById('password');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');

let contar = 3;

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    while (contar > 0) {
        if (email.value === "" || password.value === "") {
            console.log('click no', contar)
            contar--

            break;

        }else{
            mensaje.innerHTML=`has accedido correctamente`
            document.getElementById('loginForm').reset();
          window.location.href = "index.html";
            break;
        }

    }
    if (contar === 0) {
        mensaje.innerHTML=`has accedido 3 intentos   <br> su cuenta hacido bloqueada`
        
    }

})