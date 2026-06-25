
function startReading(event){

    event.preventDefault();

    const currentUser =
    localStorage.getItem("currentUser");

    if(!currentUser){

        const answer = confirm(
        "📖 Login first before reading.\n\nGo to Login Page?"
        );

        if(answer){
            window.location.href="login.html";
        }

        return;
    }

    window.location.href="story.html";
}
