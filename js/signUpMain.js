
let signUp = document.querySelector('#signUp')
let login = document.querySelector('#login')
let signUpName = document.querySelector('#signUpName')
let signUpEmail = document.querySelector('#signUpEmail')
let signUpPass = document.querySelector('#signUpPass')
let success = document.querySelector('.success')
let arr = []

// if(localStorage.getItem('user') != null){
//     arr = JSON.parse(localStorage.getItem('user'))
// }else{
//     arr = []
// }


signUp.addEventListener('click' , function(){
    
   if(signUpName.value == '' || signUpEmail.value == '' || signUpPass.value == ''){
    success.innerHTML = `<p class='text-center text-danger'>All input is Required</p>`
   }else{
    let data = {
        name:signUpName.value,
        email:signUpEmail.value,
        pass:signUpPass.value
    }
    if(checkEmailStorage() == true){
        //Alert Message
        success.innerHTML = `<p class='text-center text-info'>Email Already Exist</p>`
    }else{
    arr.push(data)
    document.querySelector('.success').innerHTML = `<p class='text-center'>success</p>`
    localStorage.setItem('user' , JSON.stringify(arr))
    display()
    clearForm()
    }
    
   }
}) 

function display(){
    let cartona = ''
    for(let i = 0 ; i<arr.length ; i++){
        cartona+=`<p class="text-center text-success fw-bold ">Success</p>`
    }
    document.querySelector('.success').innerHTML = cartona
}

function clearForm(){
    signUpName.value = ''
    signUpEmail.value = ''
    signUpPass.value = ''
}

function checkEmailStorage(){
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i].email == signUpEmail.value){
            return true
        }
    }
}
