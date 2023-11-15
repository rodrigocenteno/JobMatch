import { auth } from './firebase.js'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"

onAuthStateChanged(auth, async (user) => {
    if(user){
        var nombreUsuario = document.getElementById("nombreUsuario");
        var userEmail = user.email;
        nombreUsuario.textContent = userEmail;
    }
})

