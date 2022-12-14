const form = document.getElementById("form")
const togglePassword = document.querySelector("#see-psw");
const password = document.querySelector("#id_psw");

togglePassword.addEventListener("click", function (e) {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye");
});

form.onsubmit = function (e) {
  e.preventDefault();

  fetch("https://team-vulture2-backend.vercel.app/users", {
    method: "POST",
    body: JSON.stringify({
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        phoneNumber: document.getElementById("phoneNumber").value,
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
        form.submit()
        return jsonResponse["user"]
    })
    .catch(function (err) {
        console.log(err.message)
    });
};
