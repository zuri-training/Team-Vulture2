const generate = document.getElementById("generate")
generate.addEventListener("click", ()=>{
  if(!localStorage.getItem("auth") || !sessionStorage.getItem("auth")){
    window.location.href = "./login.html"
  } else{
    window.location.href = "./dashboard/termsgenerator.html"
  }
})