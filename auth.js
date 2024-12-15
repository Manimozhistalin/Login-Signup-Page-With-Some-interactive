// Store users in localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Toggle between login and signup forms
function toggleForms() {
    document.getElementById('loginForm').classList.toggle('hidden');
    document.getElementById('signupForm').classList.toggle('hidden');
}

// Handle signup
function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Check if user already exists
    if (users.find(user => user.email === email)) {
        alert('Email already registered!');
        return false;
    }

    // Add new user
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful! Please login.');
    toggleForms();
    return false;
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid email or password!');
    }
    return false;
}