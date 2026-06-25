
    /* CHECK LOGIN STATUS */
    function isLoggedIn(){
        return localStorage.getItem("currentUser") !== null;
    }
    
    /* START READING */
    function startReading(event){

event.preventDefault();

const currentUser = localStorage.getItem("currentUser");

if(currentUser === null){

    alert("📖 Login first before reading!");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);

    return;
}

window.location.href = "story.html";
}

    
    /* LOAD NOVELS */
    fetch("/novels")
    .then(r => r.json())
    .then(data => {
    
        let html = "";
    
        data.forEach(n => {
    
            html += `
            <div class="card">
                <img src="${n.cover}" alt="${n.title}">
                <div class="p">
                    <h4>${n.title}</h4>
                </div>
            </div>`;
        });
    
        document.getElementById("list").innerHTML = html;
    })
    .catch(() => {
    
        document.getElementById("list").innerHTML = `
            <div class="card">
                <img src="images/24.jpg">
                <div class="p">
                    <h4>The Shadow Monarch</h4>
                </div>
            </div>
    
            <div class="card">
                <img src="images/25.jpg">
                <div class="p">
                    <h4>Dragon Emperor</h4>
                </div>
            </div>
    
            <div class="card">
                <img src="images/26.jpg">
                <div class="p">
                    <h4>Demon King Reborn</h4>
                </div>
            </div>
        `;
    });
    