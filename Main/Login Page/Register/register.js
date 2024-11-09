document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registrationForm');

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    function handleRegister(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            // Check if username already exists
            if (getCookie(`user_${username}`)) {
                document.getElementById('errorMsg').textContent = 'Username already exists. Please choose a different one.';
                return;
            }

            // Create a new cookie for this user
            const cookieContent = `username=${username}&password=${password}`;
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 7); // Cookie expires in 7 days
            
            document.cookie = `user_${username}=${encodeURIComponent(cookieContent)}; expires=${expirationDate.toUTCString()}; path=/`;
            
            alert('Registration successful. You can now log in with these credentials.');
            window.location.href = '../login.html'; // Redirect to login page
        } else {
            document.getElementById('errorMsg').textContent = 'Please fill in all fields.';
        }
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
});