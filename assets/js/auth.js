document.getElementById('registerForm')?.addEventListener('submit', async function (event) {
    event.preventDefault();

    let formData = new FormData(this);

    let userData = {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password')
    };

    let response = await fetch('/puppy/backend/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });

    let result = await response.json();
    document.getElementById('responseMessage').innerText = result.message;

    if (result.status === "success") {
        window.location.href = "login.html"; // Redirect to login page
    }
});

document.getElementById('loginForm')?.addEventListener('submit', async function (event) {
    event.preventDefault();

    let formData = new FormData(this);

    console.log("Form Data Sent:", formData); // Debugging

    let response = await fetch('/puppy/backend/login.php', {
        method: 'POST',
        body: formData
    });

    let result = await response.json();
    console.log("Response:", result); // Debugging

    document.getElementById("error-message").innerText = "Invalid credentials!";


    if (result.status === "success") {
        window.location.href = "index.html"; // Redirect to home page
    }
});
document.getElementById('loginForm')?.addEventListener('submit', async function (event) {
    event.preventDefault();

    let formData = new FormData(this);

    console.log("Form Data Sent:", formData); // Debugging

    let response = await fetch('/puppy/backend/login.php', {
        method: 'POST',
        body: formData
    });

    let result = await response.json();
    console.log("Response:", result); // Debugging

    document.getElementById("error-message").innerText = "Invalid credentials!";


    if (result.status === "success") {
        window.location.href = "index.html"; // Redirect to home page
    }
});
document.getElementById('loginForm')?.addEventListener('submit', async function (event) {
    event.preventDefault();

    let formData = new FormData(this);

    console.log("Form Data Sent:", formData); // Debugging

    let response = await fetch('/puppy/backend/login.php', {
        method: 'POST',
        body: formData
    });

    let result = await response.json();
    console.log("Response:", result); // Debugging

    document.getElementById("error-message").innerText = "Invalid credentials!";

    if (result.status === "success") {
        window.location.href = "index.html"; // Redirect to home page
    }
});


async function logout() {
    let response = await fetch('/puppy/backend/logout.php');
    let result = await response.json();

    if (result.status === "success") {
        window.location.href = "login.html";
    }
}
