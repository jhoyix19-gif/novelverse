function reg(){

    const username = document.getElementById("u").value.trim();
    const password = document.getElementById("p").value;

    if(username === "" || password === ""){
        alert("Please fill in all fields.");
        return;
    }

    if(username.length < 3){
        alert("Username must be at least 3 characters.");
        return;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(
        user => user.username.toLowerCase() === username.toLowerCase()
    );

    if(exists){
        alert("Username already exists.");
        return;
    }

    users.push({
        username: username,
        password: password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account successfully created!");

    window.location.href = "login.html";
}
