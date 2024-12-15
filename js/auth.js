import { AuthService } from './services/authService.js';

const authService = new AuthService();

// Toggle between login and signup forms
window.toggleForms = function() {
    document.getElementById('loginForm').classList.toggle('hidden');
    document.getElementById('signupForm').classList.toggle('hidden');
};

// Handle signup
window.handleSignup = function(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    try {
        authService.signup(name, email, password);
        alert('Registration successful! Please login.');
        toggleForms();
    } catch (error) {
        alert(error.message);
    }
    return false;
};

// Handle login
window.handleLogin = function(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        authService.login(email, password);
        window.location.href = 'welcome.html';
    } catch (error) {
        alert(error.message);
    }
    return false;
};