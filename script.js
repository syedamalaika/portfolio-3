// 1. Landing Page Transition
const enterBtn = document.getElementById('enter-btn');
const landingPage = document.getElementById('landing-page');
const mainContent = document.getElementById('main-content');

enterBtn.addEventListener('click', () => {
    landingPage.classList.add('animate__animated', 'animate__fadeOutUp');
    setTimeout(() => {
        landingPage.style.display = 'none';
        mainContent.classList.remove('d-none');
        mainContent.classList.add('animate__animated', 'animate__fadeIn');
    }, 800);
});

// 2. Mouse Tracker
const follower = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
});

// 3. Theme Toggle (Light/Dark)
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-bs-theme', newTheme);
    
    // Update Icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-moon fs-4' : 'fas fa-sun fs-4';
});

// 4. Scroll Reveal (Basic Implementation)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});