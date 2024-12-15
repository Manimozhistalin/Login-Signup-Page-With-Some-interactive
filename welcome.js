// Check if user is logged in
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser) {
    window.location.href = 'index.html';
}

// Get greeting based on time of day
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
}

// Set greeting and user name
document.getElementById('greeting').textContent = `${getGreeting()}, ${currentUser.name}!`;
document.getElementById('userName').textContent = `Welcome to your dashboard`;

// Handle logout
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Add some interactivity
const greetingElement = document.getElementById('greeting');
greetingElement.addEventListener('mouseover', () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96c93d'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    greetingElement.style.color = randomColor;
});

greetingElement.addEventListener('mouseout', () => {
    greetingElement.style.color = 'white';
});