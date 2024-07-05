document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const openItem = document.querySelector('.accordion-item.active');
            if (openItem && openItem !== item) {
                openItem.classList.remove('active');
                openItem.querySelector('.accordion-content').style.display = 'none';
            }

            item.classList.toggle('active');
            const content = item.querySelector('.accordion-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login form');
    const signupForm = document.querySelector('.signup form');

    loginForm.addEventListener('submit', (event) => {
        const email = loginForm.email.value;
        const password = loginForm.password.value;

        if (!validateEmail(email) || !validatePassword(password)) {
            event.preventDefault();
            alert('Please enter valid email and password.');
        }
    });

    signupForm.addEventListener('submit', (event) => {
        const name = signupForm.name.value;
        const email = signupForm.email.value;
        const password = signupForm.password.value;

        if (!name || !validateEmail(email) || !validatePassword(password)) {
            event.preventDefault();
            alert('Please fill all fields with valid information.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }
});
