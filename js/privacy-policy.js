// if(!localStorage.getItem("remember")){
//     window.location.replace("./login.html")
// }
const generate = document.getElementById("generate")
generate.addEventListener("click", ()=>{
  if(!localStorage.getItem("auth") || !sessionStorage.getItem("auth")){
    window.location.href = "./login.html"
  } else{
    window.location.href = "./dashboard/privacypolicygenerator.html"
  }
})