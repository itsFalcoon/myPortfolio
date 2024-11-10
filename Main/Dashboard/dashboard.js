document.addEventListener('DOMContentLoaded', () => {
    
    const aboutMeBtn = document.getElementById("aboutMeBtn");

    aboutMeBtn.addEventListener('click', function() {
        window.location.href = './About Me/aboutMe.html';
    });
    
    
    const urlParams = new URLSearchParams(window.location.search);
    const usernameFromUrl = urlParams.get('username');

    let username;

    // Check if the username is available in the URL parameters
    if (usernameFromUrl) {
        // Store the username in a cookie
        document.cookie = `username=${usernameFromUrl};path=/`;

        // Remove the username from the URL
        history.replaceState({}, document.title, window.location.pathname);

        username = usernameFromUrl;
    } else {
        // Retrieve the username from the cookie
        username = getCookie('username');
    }

    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = `Hey! ${username}`;

    const userIcon = document.getElementById('userIcon');
    userIcon.addEventListener('click', () => {
        const dropdownMenu = document.getElementById('dropdownMenu');
        dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
    });
});

// Function to get a cookie value by its name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
}

// Function to handle the logout functionality
function logout() {
    // Remove the username from the cookie
    document.cookie = `username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

    // Redirect the user to the login page
    window.location.href = '../Login Page/login.html';
}


