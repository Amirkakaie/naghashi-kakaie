// Enhanced JavaScript for new features will be added here.
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu logic
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Dropdown menu logic
    const servicesDropdownButton = document.getElementById('services-dropdown-button');
    const servicesDropdownMenu = document.getElementById('services-dropdown-menu');

    if (servicesDropdownButton && servicesDropdownMenu) {
        servicesDropdownButton.addEventListener('mouseenter', () => {
            servicesDropdownMenu.classList.remove('hidden');
        });

        servicesDropdownButton.addEventListener('mouseleave', () => {
            servicesDropdownMenu.classList.add('hidden');
        });
    }
});
