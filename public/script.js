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
                if (icon) icon.classList.remove('rotate-180');
            } else {
                mobileSubmenu.style.maxHeight = mobileSubmenu.scrollHeight + 'px';
                if (icon) icon.classList.add('rotate-180');
                setTimeout(() => {
                    if (mobileMenu.style.maxHeight !== '0px') {
                         mobileMenu.style.maxHeight = (mobileMenu.scrollHeight + mobileSubmenu.scrollHeight) + 'px';
                    }
                }, 200);
            }
        });
    }

    // --- Scroll Animation Logic (used on multiple pages) ---
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            revealElements.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    el.classList.add('visible');
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check
    }

    // --- Contact Form Logic (for contact.html) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const formConfirmation = document.getElementById('form-confirmation');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactForm.classList.add('hidden');
            if (formConfirmation) {
                formConfirmation.classList.remove('hidden');
            }
            setTimeout(() => {
                contactForm.reset();
                if (formConfirmation) {
                    formConfirmation.classList.add('hidden');
                }
                contactForm.classList.remove('hidden');
            }, 5000);
        });
    }

    // --- Gallery Filter Logic (for gallery.html) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update button styles
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-blue-500', 'text-white');
                    btn.classList.add('bg-white', 'text-slate-700');
                });
                button.classList.remove('bg-white', 'text-slate-700');
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

    // --- FAQ Accordion Logic (for service pages) ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(button => {
            button.addEventListener('click', () => {
                const faqItem = button.closest('.faq-item');
                if (faqItem) {
                    faqItem.classList.toggle('open');
                }
            });
        });
    }

    // --- Lightbox Logic (for gallery.html) ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryGrid = document.getElementById('gallery-grid');

    if (lightbox && lightboxImg && galleryGrid) {
        const galleryImages = galleryGrid.querySelectorAll('img');
        const lightboxClose = document.getElementById('lightbox-close');

        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                const highResSrc = img.src.replace('w=800', 'w=1600'); // Load a higher resolution image for the lightbox
                lightboxImg.setAttribute('src', highResSrc);
                lightbox.classList.remove('hidden');
            });
        });

        const closeLightbox = () => {
            lightbox.classList.add('hidden');
            lightboxImg.setAttribute('src', ''); // Clear src to stop loading
        };

        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});
