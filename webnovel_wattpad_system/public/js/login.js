function readNow() {
        
    const user = localStorage.getItem("user");

    if (user) {
        // User is logged in
        window.location.href = "read.html";
    } else {

        const choice = confirm(
            "You need to create an account or log in before reading.\n\nClick OK to Login.\nClick Cancel to Register."
        );

        if (choice) {
            // Focus login form
            document.getElementById("u").focus();
        } else {
            // Go to registration page
            window.location.href = "register.html";
        }
    }
}

function login(){

const username = document.getElementById("u").value.trim();
const password = document.getElementById("p").value;

let users = JSON.parse(localStorage.getItem("users")) || [];

const user = users.find(
u => u.username === username &&
 u.password === password
);

if(user){

localStorage.setItem(
"currentUser",
JSON.stringify({
username: u.value
})
);
alert("Login Successful!");

window.location.href = "dashboard.html";

}else{
alert("Invalid username or password.");
}
}

const cover = document.querySelector(".cover");
const btn = document.getElementById("readBtn");

btn.addEventListener("mouseenter", () => {
cover.style.transform = "scale(1.12) translateY(-15px) rotate(-2deg)";
cover.style.boxShadow =
"0 0 30px #7f5cff, 0 0 80px #7f5cff, 0 0 150px #7f5cff";
});

btn.addEventListener("mouseleave", () => {
cover.style.transform = "scale(1) translateY(0) rotate(0deg)";
cover.style.boxShadow =
"0 0 20px #7f5cff, 0 0 50px #7f5cff";
});