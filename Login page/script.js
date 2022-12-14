const togglePassword = document.querySelector("#see-psw");
const form = document.getElementById("form")


//   togglePassword.addEventListener("click", function () {
//   let password = document.querySelector("#id_psw");
//   // toggle the type attribute
//   if(password.type === "password"){
//     password.type = "text"
//     togglePassword.className = "fa-regular fa-eye"
//   } else{
//     password.type = "password"
//     togglePassword.className = "fa-regular fa-eye-slash"
//   }
//   });

//or 
      
togglePassword.addEventListener("click", function (e) {
    const password = document.querySelector("#id_psw");
    // // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye");
});


form.onsubmit = function (e) {
  e.preventDefault();

  fetch("https://team-vulture2-backend.vercel.app/login", {
    method: "POST",
    body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
}),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(function (jsonResponse) {
        console.log(jsonResponse["user"])
        form.submit()
        return jsonResponse["user"]
    })
    .catch(function (err) {
        console.log(err.message)
    });
};
