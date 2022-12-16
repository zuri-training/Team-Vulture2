if (!localStorage.getItem("auth")){
    window.location.replace("../Login page/login.html") 
}
user = JSON.parse(localStorage.getItem("user"))
document.getElementById("firstName").innerHTML = user.firstName
document.getElementById("lastName").innerHTML = user.lastName
document.getElementById("email").innerHTML = user.email
document.getElementById("phoneNumber").innerHTML = user.phoneNumber