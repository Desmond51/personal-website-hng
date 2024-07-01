// Get the current time in UTC
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
currentTimeUTC.textContent = new Date().toUTCString();

// Get the current day of the week
const currentDay = document.querySelector('[data-testid="currentDay"]');
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayIndex = new Date().getDay();
currentDay.textContent = daysOfWeek[currentDayIndex];

// Smooth scrolling
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Progress bar
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  const progressBar = document.querySelector('[data-testid="progressBar"] .progress-bar-fill');
  progressBar.style.width = `${progress}%`;
});