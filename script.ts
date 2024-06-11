document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username: string = (<HTMLInputElement>document.getElementById("username")).value;
    const password: string = (<HTMLInputElement>document.getElementById("password")).value;
    const successMessageElement: HTMLElement = document.getElementById("successMessage");
    if (validateUsername(username) && validatePassword(password)) {
        successMessageElement.innerHTML = "Successfully logged in. Redirecting to home page...";
        successMessageElement.style.display = "block";
        setTimeout(() => {
            window.location.href = "home.html";
        }, 2000); 
    } else {
        alert("Invalid username or password. Please check and try again.");
    }
});
function validateUsername(username: string): boolean {
    return username.trim() !== '';
}

function validatePassword(password: string): boolean {
    return password.length >= 6;
}
