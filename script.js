document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to ABC Web Consultancy!");
});

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields!");
        return false;
    }
    return true;
}