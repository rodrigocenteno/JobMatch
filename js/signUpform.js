import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signupForm = document.querySelector('#signUpForm')

signupForm.addEventListener('submit', async (e)=>{
    e.preventDefault()

    const email = signupForm['semail'].value
    const password= signupForm['spassword'].value

    


    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password) //forma simple para escribir una promesa
        console.log(userCredential)
        
        showMessage("Bienvenido " + userCredential.user.email)
    } catch (error) {
        if(error.code == 'auth/email-already-in-use'){
            showMessage("Usuario ya registrado", "error")
        }
        else if(error.code == 'auth/invalid-email'){
            showMessage("email invalido", "error")
        
        }else if(error.code == 'auth/weak-password'){
            showMessage("Contraseña demasiada corta", "error")
            
        }else if(error.code){
            showMessage("Ups, algo salio mal", "error")
            
        }
    }
})