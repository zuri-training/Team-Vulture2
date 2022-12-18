//the storage will have value if the user is logged in else the user shoould be redirected to login page
if(!localStorage.getItem("remember")){
    window.location.replace("../Login page/login.html")
}
// let user = JSON.parse(localStorage.getItem("user"))
// if(localStorage.getItem("remember") === 0){
//    user = JSON.parse(sessionStorage.getItem("user"))
// }
let user = localStorage.getItem("remember") == 0 ? JSON.parse(sessionStorage.getItem("user")) : JSON.parse(localStorage.getItem("user"))
const user_id = user.user_id
document.getElementById("firstName").innerHTML = user.firstName
document.getElementById("lastName").innerHTML = user.lastName
document.getElementById("email").innerHTML = user.email
document.getElementById("phoneNumber").innerHTML = user.phoneNumber
const button = document.querySelector("#logOut")
const deleteUser = document.querySelector("#delete")

button.onclick = ()=>{
    localStorage.getItem("remember") == 1 ? localStorage.removeItem("user") : sessionStorage.removeItem("user")
    localStorage.getItem("remember") == 1 ? localStorage.removeItem("auth") : sessionStorage.removeItem("auth")
    localStorage.getItem("remember") == 1 ? localStorage.removeItem("remember") : sessionStorage.removeItem("remember")
    window.location.replace("../Login page/login.html") 
}

deleteUser.onclick = ()=>{
if(user){
    fetch("https://team-vulture2-backend.vercel.app/users/" + user_id, {
      method: "DELETE"
    })
    .then(function (response) {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(function (jsonResponse) {
        console.log(jsonResponse)
        swal({  
          title: "Notification!!!",  
          text: "User deleted successfully",  
          icon: "success",  
          button: "OK!",  
        });
        localStorage.getItem("remember") == 1 ? localStorage.removeItem("user") : sessionStorage.removeItem("user")
        localStorage.getItem("remember") == 1 ? localStorage.removeItem("auth") : sessionStorage.removeItem("auth")
        localStorage.getItem("remember") == 1 ? localStorage.removeItem("remember") : sessionStorage.removeItem("remember")
        window.location.replace("../Login page/login.html") 
    })
    .catch(function (err) {
        console.log(err.message)
        swal({  
          title: "Error!!!",  
          text: "User not deleted, try again",  
          icon: "alert",  
          button: "OK!",  
        });
    });
  } 
}