import { GoogleAuthProvider, signInWithPopup  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth } from "./firebase";
import { showMessage } from "./showMessage";
const googleButton = document.querySelector("#googleUp");

googleButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();
    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials);

        showMessage("Bienvenido " + credentials.user.displayName);
    } catch (error) {
        console.log(error);
    }
    
});