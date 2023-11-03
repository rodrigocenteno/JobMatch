import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#logInForm");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["lemail"].value;
  const password = signInForm["lpassword"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)

    // Close the login modal
    //const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
    //modal.hide();

    // reset the form
    signInForm.reset();

    // show welcome message
    showMessage("Welcome" + userCredentials.user.email);
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("Wrong password", "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage("User not found", "error")
    } else {
      showMessage("Something went wrong", "error")
    }
  }
});