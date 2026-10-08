document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let address = document.getElementById("address").value.trim();

    let message = document.getElementById("message");

    if (name === "" || email === "" || phone === "" ||
        username === "" || password === "" || address === "") {

        message.style.color = "red";
        message.innerHTML = "Please fill all fields.";
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.style.color = "red";
        message.innerHTML = "Enter a valid email.";
        return;
    }

    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        message.style.color = "red";
        message.innerHTML = "Phone number must contain 10 digits.";
        return;
    }

    if (password.length < 6) {
        message.style.color = "red";
        message.innerHTML = "Password must contain at least 6 characters.";
        return;
    }

    message.style.color = "green";
    message.innerHTML = "Registration successful!";

    document.getElementById("registrationForm").reset();
});