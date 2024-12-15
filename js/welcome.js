import { AuthService } from './services/authService.js';

const authService = new AuthService();
const currentUser = authService.getCurrentUser();

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
window.logout = function() {
    authService.logout();
    window.location.href = 'index.html';
};

// Mood tracker functionality
const moodButtons = document.querySelectorAll('.mood-btn');
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove previous selection
        moodButtons.forEach(btn => btn.classList.remove('selected-mood'));
        // Add selection to clicked button
        button.classList.add('selected-mood');
        
        // Show a random encouraging message
        const messages = [
            "That's great to know!",
            "Thanks for sharing!",
            "We hear you!",
            "Keep being awesome!"
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        alert(randomMessage);
    });
});

// Fortune cookie messages
const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A fresh start will put you on your way.",
    "A golden egg of opportunity falls into your lap this month.",
    "A smile will get you far.",
    "Adventure can be real happiness.",
    "All your hard work will soon pay off."
];

document.getElementById('fortuneBtn').addEventListener('click', () => {
    const fortuneText = document.getElementById('fortuneText');
    fortuneText.style.opacity = '0';
    
    setTimeout(() => {
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        fortuneText.textContent = randomFortune;
        fortuneText.style.opacity = '1';
    }, 500);
});

// Fun weather generator
const weatherTypes = [
    { icon: '☀️', text: 'Sunny with a chance of success' },
    { icon: '🌧️', text: 'Raining opportunities' },
    { icon: '⛈️', text: 'Thunderstorm of inspiration' },
    { icon: '🌈', text: 'Rainbow of possibilities' },
    { icon: '❄️', text: 'Snowfall of serenity' }
];

document.getElementById('weatherBtn').addEventListener('click', () => {
    const weatherDisplay = document.getElementById('weather');
    const randomWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    
    weatherDisplay.innerHTML = `
        <button id="weatherBtn" class="interactive-btn">
            <i class="fas fa-cloud-sun"></i> Generate Weather
        </button>
        <div class="weather-icon">${randomWeather.icon}</div>
        <p>${randomWeather.text}</p>
    `;
});

// Avatar spin on hover
const avatar = document.getElementById('avatar');
let rotationDegree = 0;

avatar.addEventListener('mouseover', () => {
    rotationDegree += 360;
    avatar.style.transform = `rotate(${rotationDegree}deg)`;
});

// Random color effects for greeting
const greetingElement = document.getElementById('greeting');
const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96c93d', '#ff9f43', '#ee5253'];

greetingElement.addEventListener('mouseover', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    greetingElement.style.color = randomColor;
});

greetingElement.addEventListener('mouseout', () => {
    greetingElement.style.color = 'white';
});