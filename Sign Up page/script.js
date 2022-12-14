const form = document.getElementById("form")
const togglePassword = document.querySelector("#see-psw");
const password = document.querySelector("#id_psw");
// const apiUrl = "https://team-vulture2-backend.vercel.app"
const apiUrl = "https://localhost:3000"

togglePassword.addEventListener("click", function (e) {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye");
});

class Auth {
	constructor() {
        document.querySelector("body").style.display = "none";
		const auth = localStorage.getItem("auth");
		this.validateAuth(auth);
	}

	validateAuth(auth) {
		if (auth != 1) {
			window.location.replace("/");
		} else {
            document.querySelector("body").style.display = "block";
		}
	}

	logOut() {
		localStorage.removeItem("auth");
		window.location.replace("/");
	}
}

form.onsubmit = function (e) {
  e.preventDefault();

  fetch("https://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify({
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
        return jsonResponse["user"]
    })
    .then(function (user) {
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("auth", 1)
        form.submit()
        // window.location.href = "http://127.0.0.1:5500/Dashboard/Db.html"
    })
    .catch(function (err) {
        console.log(err.message)
    });
};
