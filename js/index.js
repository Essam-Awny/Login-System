let emailLoginInput = document.querySelector('#emailLoginInput')
let passLoginInput = document.querySelector('#passLoginInput')
let loginBtn = document.querySelector('#loginBtn')
let alertMessage = document.querySelector('.alertMessage')
let usersContainer = []

if(localStorage.getItem('user') != null){
    usersContainer = JSON.parse(localStorage.getItem('user'))
}


loginBtn.addEventListener('click' , function(){
   if(checkEmailPassword() == true){
    window.location.href = 'welcome.html'
   }else{

        alertMessage.classList.replace('d-none', 'd-block')
   }
    
})

function checkEmailPassword(){
    for(let i = 0; i<usersContainer.length ; i++){
        if(usersContainer[i].email == emailLoginInput.value && usersContainer[i].pass == passLoginInput.value){
            // localStorage.setItem('userName' , )
            return true
        }
    }
}
