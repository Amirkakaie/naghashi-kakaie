document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Logic ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            if (mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px') {
                mobileMenu.style.maxHeight = '0px';
            } else {
                mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
            }
        });
    }

    // --- Mobile Submenu Logic ---
    const mobileSubmenuButton = document.getElementById('mobile-submenu-button');
    const mobileSubmenu = document.getElementById('mobile-submenu');
    if (mobileSubmenuButton && mobileSubmenu) {
        mobileSubmenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const icon = mobileSubmenuButton.querySelector('i');
            if (mobileSubmenu.style.maxHeight && mobileSubmenu.style.maxHeight !== '0px') {
                mobileSubmenu.style.maxHeight = '0px';
                icon.classList.remove('rotate-180');
            } else {
                mobileSubmenu.style.maxHeight = mobileSubmenu.scrollHeight + 'px';
                icon.classList.add('rotate-180');
                setTimeout(() => {
                    mobileMenu.style.maxHeight = (mobileMenu.scrollHeight + mobileSubmenu.scrollHeight) + 'px';
                }, 200);
            }
        });
    }

    // --- Scroll Animation Logic ---
    const revealElements = document.querySelectorAll('.reveal');
    const processSection = document.getElementById('process-section');
    const processLine = document.getElementById('process-line');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('visible');
            }
        });
        if (processSection && processLine) {
            const elementTop = processSection.getBoundingClientRect().top;
            if (elementTop < windowHeight - 200) {
                processLine.style.width = '100%';
            }
        }
    };
    if (revealElements.length > 0) {
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check
    }

    // --- FAQ Toggle Logic ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.closest('.faq-item');
            faqItem.classList.toggle('open');
        });
    });

    // --- Gallery Filter Logic ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('bg-blue-500', 'text-white'));
                button.classList.add('bg-blue-500', 'text-white');
                const filter = button.dataset.filter;
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }

    // --- Contact Form Logic ---
    const contactForm = document.getElementById('contact-form');
    const formConfirmation = document.getElementById('form-confirmation');
    if (contactForm && formConfirmation) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    contactForm.classList.add('hidden');
                    formConfirmation.classList.remove('hidden');
                    contactForm.reset();
                } else {
                    alert('خطا در ارسال پیام. لطفاً دوباره تلاش کنید.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('یک خطای پیش‌بینی نشده رخ داد. لطفاً با پشتیبانی تماس بگیرید.');
            }
        });
    }
});
