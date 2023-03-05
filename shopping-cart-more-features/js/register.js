let form = document.getElementById("form")
let userName = document.getElementById("name")
let email = document.getElementById("email")
let password = document.querySelector(".password")



//add event lisnter to form 
form.addEventListener('submit' ,function(e){


e.preventDefault()

if(userName.value == '' 
||  email.value == '' 
|| password.value ==''){


alert("please enter vaild inputs")

}else{


let  userInfo = {


    name: userName.value ,
    password: password.value,
    email:email.value
}
localStorage.setItem("userData" , JSON.stringify(userInfo))
setTimeout(() => {
    window.location.href = "index.html";
}, 2000);
}


})
