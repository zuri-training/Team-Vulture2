const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
})

const hidePassword = document.querySelector("#hide-password");
const confirmField = document.querySelector("#confirmpassword");

hidePassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye");
    const type = confirmField.getAttribute("type") === "password" ? "text" : "password";
    confirmField.setAttribute("type", type);
})