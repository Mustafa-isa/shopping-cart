let form = document.getElementById("form")
let userName = document.getElementById("name")
let password = document.querySelector(".password")



//add event lisnter to form 
form.addEventListener('submit' ,function(e){


e.preventDefault()

if(userName.value == '' 
|| password.value ==''){


alert("please enter vaild inputs")

}
else{


    let  userData = JSON.parse(localStorage.getItem("userData"))
if(userName.value == userData.name && 
    password.value == userData.password){


setTimeout(() => {
    window.location.href ="index.html"
}, 2000);
       
    }else{

        alert("you are not logim please register")
    }

 

}})