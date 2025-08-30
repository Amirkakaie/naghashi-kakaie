<header class="bg-white shadow-lg sticky top-0 z-50">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" class="text-3xl font-bold text-blue-600">نقاشی مدرن</a>
            <div class="hidden md:flex items-center space-x-8 space-x-reverse">
                <a href="/" class="text-slate-600 hover:text-blue-500 transition">خانه</a>
                <div class="relative group">
                    <button class="text-slate-600 hover:text-blue-500 transition flex items-center py-2">
                        خدمات ما <i class="fas fa-chevron-down mr-2 text-xs group-hover:rotate-180"></i>
                    </button>
                    <div class="dropdown-menu absolute bg-white shadow-xl rounded-lg mt-0 py-2 w-48 z-50">
                        <a href="/service/plastic-paint.html" class="block px-4 py-2 text-slate-700 hover:bg-blue-50">رنگ پلاستیک</a>
                        <a href="/service/oil-paint.html" class="block px-4 py-2 text-slate-700 hover:bg-blue-50">رنگ روغنی</a>
                        <a href="/service/acrylic-paint.html" class="block px-4 py-2 text-slate-700 hover:bg-blue-50">رنگ اکریلیک</a>
                        <a href="/service/multicolor-paint" class="block px-4 py-2 text-slate-700 hover:bg-blue-50">مولتی‌کالر</a>
                    </div>
                </div>
                <a href="/gallery" class="text-slate-600 hover:text-blue-500 transition">گالری</a>
                <a href="/about" class="text-slate-600 hover:text-blue-500 transition">درباره ما</a>
                <a href="/contact" class="text-slate-600 hover:text-blue-500 transition">تماس با ما</a>
            </div>
            <button id="mobile-menu-button" class="md:hidden flex items-center"><i class="fas fa-bars text-2xl"></i></button>
        </nav>
        <div id="mobile-menu" class="md:hidden bg-white shadow-lg">
            <a href="/" class="block py-3 px-6 text-slate-700 hover:bg-blue-50 border-b">خانه</a>
            <div>
                <button id="mobile-submenu-button" class="w-full flex justify-between items-center py-3 px-6 text-slate-700 hover:bg-blue-50 border-b">
                    <span>خدمات ما</span>
                    <i class="fas fa-chevron-down text-xs"></i>
                </button>
                <div id="mobile-submenu" class="mobile-submenu bg-slate-50">
                    <a href="/service/plastic-paint" class="block py-2 px-8">رنگ پلاستیک</a>
                    <a href="/service/oil-paint" class="block py-2 px-8">رنگ روغنی</a>
                    <a href="/service/acrylic-paint" class="block py-2 px-8">رنگ اکریلیک</a>
                    <a href="/service/multicolor-paint" class="block py-2 px-8">مولتی‌کالر</a>
                </div>
            </div>
            <a href="/gallary" class="block py-3 px-6 text-slate-700 hover:bg-blue-50 border-b">گالری</a>
            <a href="/about" class="block py-3 px-6 text-slate-700 hover:bg-blue-50 border-b">درباره ما</a>
            <a href="/cantact" class="block py-3 px-6 text-slate-700 hover:bg-blue-50">تماس با ما</a>
        </div>
    </header>