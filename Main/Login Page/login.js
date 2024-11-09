document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    function handleLogin(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (checkCredentials(username, password)) {
            alert('Login successful! Redirecting to dashboard.');
            window.location.href = '../Dashboard/dashboard.html?username=' + encodeURIComponent(username);        } else {
            alert('Invalid username or password.');
        }
    }

    function checkCredentials(username, password) {
        const userCookie = getCookie(`user_${username}`);
        if (userCookie) {
            const decodedCredentials = decodeURIComponent(userCookie);
            const [storedUsername, storedPassword] = decodedCredentials.split('&').map(pair => pair.split('=')[1]);
            return username === storedUsername && password === storedPassword;
        }
        return false;
    }

    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
});