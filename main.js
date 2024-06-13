
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('theme-toggle');
    const navToggle = document.getElementById('nav-toggle');
    const body = document.body;
    const header = document.querySelector('header');

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    navToggle.addEventListener('click', () => {
        header.classList.toggle('nav-active');
    });

    const navItems = document.querySelectorAll('.nav-item');
    const navIndicator = document.querySelector('.nav-indicator');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.nav-item.is-active').classList.remove('is-active');
            item.classList.add('is-active');
            updateIndicator(item);
            scrollToSection(item.getAttribute('href'));
        });
    });

    function updateIndicator(item) {
        navIndicator.style.width = item.offsetWidth + 'px';
        navIndicator.style.left = item.offsetLeft + 'px';
    }

    // Set initial indicator position
    updateIndicator(document.querySelector('.nav-item.is-active'));

    function scrollToSection(id) {
        const section = document.querySelector(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    }
});

// JavaScript for scrolling back to top
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
