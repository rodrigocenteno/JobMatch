import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"

import {auth} from  './js/firebase.js'
import './js/signUpform.js'
import './js/signinForm.js'
import './js/googleLogin.js'

onAuthStateChanged(auth, async (user) => {

})