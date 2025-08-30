<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>درباره ما | نقاشی ساختمان مدرن</title>
    <meta name="description" content="با داستان و تعهد تیم نقاشی مدرن آشنا شوید. ما با ۲۸ سال تجربه و انجام بیش از ۶۰۰ پروژه موفق، به کیفیت، صداقت و احترام به زمان شما پایبندیم.">

    <!-- Canonical URL -->
    <link rel="canonical" href="https://your-domain.com/about.html">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://your-domain.com/about.html">
    <meta property="og:title" content="درباره ما | نقاشی ساختمان مدرن">
    <meta property="og:description" content="با داستان و تعهد تیم نقاشی مدرن آشنا شوید. ما با ۲۸ سال تجربه و انجام بیش از ۶۰۰ پروژه موفق، به کیفیت، صداقت و احترام به زمان شما پایبندیم.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://your-domain.com/about.html">
    <meta name="twitter:title" content="درباره ما | نقاشی ساختمان مدرن">
    <meta name="twitter:description" content="با داستان و تعهد تیم نقاشی مدرن آشنا شوید. ما با ۲۸ سال تجربه و انجام بیش از ۶۰۰ پروژه موفق، به کیفیت، صداقت و احترام به زمان شما پایبندیم.">
    <meta name="twitter:image" content="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop">

    <!-- Schema.org markup -->
    <script type="application/ld+json" src="../../components/shema/about/shema.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap');
        body { font-family: 'Vazirmatn', sans-serif; overflow-x: hidden; }
        .group:hover .dropdown-menu { opacity: 1; transform: translateY(0); visibility: visible; }
        .dropdown-menu { opacity: 0; transform: translateY(10px); transition: opacity 0.3s ease, transform 0.3s ease; visibility: hidden; }
        #mobile-menu { max-height: 0; overflow: hidden; transition: max-height 0.5s cubic-bezier(0.23, 1, 0.32, 1); }
        .mobile-submenu { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-in-out; }

        /* Scroll-triggered Animations */
        .reveal {
            opacity: 0;
            transform: translateY(60px);
            transition: opacity 0.8s, transform 0.8s;
        }
        .reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
    <?php include("../components/script-for-all.php")?>
</head>
<body class="bg-slate-100 text-slate-800">

    <!-- Header -->
    <?php include("../components/header.php")?>

    <!-- Main Content -->
    <main>
        <!-- About Hero Section -->
        <section class="relative bg-gray-800 text-white py-20 md:py-32 text-center">
            <!-- <img src="imgs/about header img.jpg" class="absolute top-0 left-0 w-full h-full object-cover opacity-20" alt="تیم ما"> -->
            <div class="relative container mx-auto px-6">
                <h1 class="text-4xl md:text-5xl font-bold reveal">داستان ما، تعهد ما</h1>
                <p class="text-lg md:text-xl mt-4 max-w-3xl mx-auto reveal" style="transition-delay: 0.2s;">از سال ۱۳۷۵ تا امروز، با عشق و علاقه به رنگ‌ها، در کنار شما بوده‌ایم.</p>
            </div>
        </section>

        <!-- Experience Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="reveal" style="transition-delay: 0.2s;">
                        <h2 class="text-3xl font-bold text-slate-800 mb-4">28 سال تجربه، 600+ پروژه موفق</h2>
                        <p class="text-slate-600 leading-loose">
                            سفر ما در دنیای رنگ و نقاشی از سال ۱۳۷۵ آغاز شد. در طول این ۲۸ سال، افتخار داشته‌ایم که بیش از ۶۰۰ پروژه ساختمانی، از آپارتمان‌های کوچک تا مجتمع‌های بزرگ تجاری و اداری را با موفقیت به اتمام برسانیم. هر پروژه برای ما داستانی جدید از اعتماد شما و فرصتی برای خلق زیبایی بوده است. این تجربه گران‌بها به ما آموخته است که چگونه با هر چالشی روبرو شویم و بهترین نتیجه را برای شما به ارمغان بیاوریم.
                        </p>
                    </div>
                    <div class="reveal">
                        <img src="imgs/about hero img.jpg" alt="سابقه و تجربه" class="rounded-xl shadow-2xl">
                    </div>
                </div>
            </div>
        </section>

        <!-- Values Section -->
        <section class="py-20 bg-slate-50">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-slate-800 reveal">ارزش‌های ما</h2>
                    <p class="text-slate-600 mt-2 reveal" style="transition-delay: 0.2s;">آنچه ما را می‌سازد و به آن پایبندیم</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div class="bg-white p-8 rounded-xl shadow-lg reveal transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" style="transition-delay: 0.1s;">
                        <i class="fas fa-medal text-4xl text-blue-500 mb-4"></i>
                        <h3 class="text-xl font-bold mb-2">تعهد به کیفیت</h3>
                        <p class="text-slate-500">استفاده از بهترین متریال و اجرای بی‌نقص، خط قرمز ماست.</p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-lg reveal transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" style="transition-delay: 0.3s;">
                        <i class="fas fa-handshake text-4xl text-blue-500 mb-4"></i>
                        <h3 class="text-xl font-bold mb-2">صداقت و شفافیت</h3>
                        <p class="text-slate-500">ارائه مشاوره صادقانه و قیمت‌گذاری شفاف از اصول اولیه ماست.</p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-lg reveal transition-all duration-300 hover:shadow-2xl hover:-translate-y-2" style="transition-delay: 0.5s;">
                        <i class="fas fa-clock text-4xl text-blue-500 mb-4"></i>
                        <h3 class="text-xl font-bold mb-2">احترام به زمان</h3>
                        <p class="text-slate-500">ما به زمان شما احترام می‌گذاریم و پروژه را در موعد مقرر تحویل می‌دهیم.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-blue-600 text-white">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-3xl font-bold reveal">آماده‌اید فضای خود را متحول کنید؟</h2>
                <p class="mt-4 max-w-2xl mx-auto reveal" style="transition-delay: 0.2s;">اجازه دهید تجربه و هنر ما، زیبایی را به خانه و محل کار شما بیاورد. برای مشاوره رایگان با ما تماس بگیرید.</p>
                <a href="contact.html" class="mt-8 inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 shadow-lg reveal" style="transition-delay: 0.4s;">
                    شروع کنیم
                </a>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <?php include("../components/footer.php")?>

    <?php include("../components/shomareh.php")?>

    <script src="../public/script.js"></script>
</body>
</html>
