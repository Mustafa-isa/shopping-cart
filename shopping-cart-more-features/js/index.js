const list = document.querySelector(".list")



let  userData = JSON.parse(localStorage.getItem("userData"))
if(userData){
    list.innerHTML =''
list.innerHTML =`
<li><a herf ="#">${userData.name}</a></li>`

}
