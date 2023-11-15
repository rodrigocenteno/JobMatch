const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

export const loginCheck = user =>{
    if(user){
        window.location.href = "../profile.html";
    }else{
        
    }
}