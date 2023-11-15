import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
import {loginCheck} from './js/loginCheck.js'
import {auth} from  './js/firebase.js'
import './js/signinForm.js'


onAuthStateChanged(auth, async (user) => {
    if(user){
      loginCheck(user) 
     }else{
       
       
     }
})