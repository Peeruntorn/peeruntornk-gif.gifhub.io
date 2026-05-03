// Dark mode toggle
const darkModeBtn = document.getElementById('darkModeBtn');
const html = document.documentElement;

// Check for saved dark mode preference or default to system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedDarkMode = localStorage.getItem('darkMode');
const isDarkMode = savedDarkMode !== null ? savedDarkMode === 'true' : prefersDark;

// Apply dark mode on load
if (isDarkMode) {
  html.style.colorScheme = 'dark';
  darkModeBtn.textContent = '☀️';
}

// Toggle dark mode
darkModeBtn.addEventListener('click', () => {
  const currentDarkMode = html.style.colorScheme === 'dark';
  html.style.colorScheme = currentDarkMode ? 'light' : 'dark';
  darkModeBtn.textContent = currentDarkMode ? '🌙' : '☀️';
  localStorage.setItem('darkMode', !currentDarkMode);
});

// Smooth scrolling for navigation
const navLinks = document.querySelectorAll('.top-nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 20,
        behavior: 'smooth',
      });
    }
  });
});
