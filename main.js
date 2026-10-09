// main.js

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initModal();
    initFAQ();
    initReveal();
});

// Theme Management
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const icon = themeToggleBtn.querySelector('i');

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme, icon);
    } else if (prefersDark) {
        html.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark', icon);
    }

    // Toggle theme
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, icon);
    });
}

function updateThemeIcon(theme, iconElement) {
    if (theme === 'dark') {
        iconElement.classList.replace('fa-moon', 'fa-sun');
    } else {
        iconElement.classList.replace('fa-sun', 'fa-moon');
    }
}

// Mobile Menu
function initMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    mobileBtn.addEventListener('click', () => {
        const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
        mobileBtn.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');

        // Change icon
        const icon = mobileBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileBtn.setAttribute('aria-expanded', 'false');
            mobileBtn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
        });
    });
}

// Privacy Modal
function initModal() {
    const modal = document.getElementById('privacy-modal');
    const openBtn = document.getElementById('open-privacy');
    const closeBtn = document.querySelector('.close-modal');

    if (!modal || !openBtn || !closeBtn) return;

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close on click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// FAQ Accordion Toggle - Ensure only one opens at a time (Optional logic)
function initFAQ() {
    const details = document.querySelectorAll('.faq-item');

    details.forEach(targetDetail => {
        targetDetail.addEventListener('click', () => {
            details.forEach(detail => {
                if (detail !== targetDetail) {
                    detail.removeAttribute('open');
                }
            });
        });
    });
}

// Reveal on scroll
function initReveal() {
    const items = document.querySelectorAll('.reveal');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!items.length || reduceMotion || !('IntersectionObserver' in window)) return;

    document.documentElement.classList.add('js-reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    items.forEach(item => observer.observe(item));
}
