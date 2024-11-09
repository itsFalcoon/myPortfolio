document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = `Hey! ${username}`;
});