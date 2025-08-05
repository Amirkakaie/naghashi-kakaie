document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Logic ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // Toggle visibility by adjusting max-height
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
            e.stopPropagation(); // Prevent the main menu from closing
            const icon = mobileSubmenuButton.querySelector('i');

            // Toggle submenu visibility
            if (mobileSubmenu.style.maxHeight && mobileSubmenu.style.maxHeight !== '0px') {
                mobileSubmenu.style.maxHeight = '0px';
                icon.classList.remove('rotate-180');
            } else {
                mobileSubmenu.style.maxHeight = mobileSubmenu.scrollHeight + 'px';
                icon.classList.add('rotate-180');
                // Adjust main menu height to accommodate the opened submenu
                setTimeout(() => {
                    mobileMenu.style.maxHeight = (mobileMenu.scrollHeight + mobileSubmenu.scrollHeight) + 'px';
                }, 200); // Wait for submenu to open
            }
        });
    }

    // --- Desktop Dropdown (No JS needed for hover, handled by CSS) ---
});
