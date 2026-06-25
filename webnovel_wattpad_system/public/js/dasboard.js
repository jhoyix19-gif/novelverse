
    const currentUser = localStorage.getItem("currentUser");
    
    if(currentUser){
    
        const btn = document.getElementById("authBtn");
    
        btn.innerHTML = "🚪 Logout";
    
        btn.href = "#";
    
        btn.onclick = function(e){
    
            e.preventDefault();
    
            if(confirm("Are you sure you want to logout?")){
    
                localStorage.removeItem("currentUser");
    
                alert("Logged out successfully!");
    
                window.location.href = "login.html";
            }
        };
    }
    
