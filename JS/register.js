document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let nameRegex = /^[A-Za-z]{1,15}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!nameRegex.test(name)) {
        Swal.fire("Error!", "Name should be max 15 letters without numbers!", "error");
        return;
    }

    if (!emailRegex.test(email)) {
        Swal.fire("Error!", "Invalid email format!", "error");
        return;
    }

    // if (!passwordRegex.test(password)) {
    //     Swal.fire("Error!", "Password must contain uppercase, lowercase, number, and special character!", "error");
    //     return;
    // }

    localStorage.setItem("user", JSON.stringify({ name, email }));

    Swal.fire("Success!", "Registration Successful!", "success").then(() => {
        window.location.href = "index.html";
    });
});
