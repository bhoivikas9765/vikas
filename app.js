// Function to include standard components (Navbar & Footer) across pages
const navbarHTML = `
<nav class="fixed w-full z-50 transition-all duration-300 glass-nav" id="navbar">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
            <div class="flex-shrink-0">
                <a href="index.html" class="flex items-center gap-2">
                    <span class="text-gradient font-bold text-2xl tracking-tight">Anti-Ragging</span>
                </a>
            </div>
            
            <!-- Desktop Menu -->
            <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-8">
                    <a href="index.html" class="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors">मुख्यपृष्ठ</a>
                    <a href="side-effects.html" class="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors">दुष्परिणाम</a>
                    <a href="legal.html" class="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors">कायदेशीर माहिती</a>
                    <a href="pledge.html" class="nav-link text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 px-4 py-2 rounded-lg font-semibold shadow-lg shadow-red-500/30 transition-all">शपथ घ्या</a>
                </div>
            </div>
            
            <!-- Mobile menu button -->
            <div class="-mr-2 flex md:hidden">
                <button type="button" id="mobile-menu-btn" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden hidden bg-[#1a1c23] border-b border-gray-800" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="index.html" class="nav-link text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">मुख्यपृष्ठ</a>
            <a href="side-effects.html" class="nav-link text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">दुष्परिणाम</a>
            <a href="legal.html" class="nav-link text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">कायदेशीर माहिती</a>
            <a href="pledge.html" class="nav-link text-white bg-gradient-to-r from-red-500 to-orange-500 block px-4 py-2 mt-4 rounded-lg text-center font-semibold">शपथ घ्या</a>
        </div>
    </div>
</nav>
`;

const footerHTML = `
<footer class="mt-24 border-t border-gray-800 bg-[#1a1c23]/80 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
                <span class="text-gradient font-bold text-2xl tracking-tight mb-4 inline-block">Anti-Ragging Portal</span>
                <p class="text-gray-400 mt-2">रॅगिंग थांबवणे, ही आपली सर्वांची जबाबदारी आहे. एक सुरक्षित आणि भयमुक्त शैक्षणिक वातावरण निर्माण करूया.</p>
            </div>
            <div>
                <h3 class="text-white font-semibold text-lg mb-4">महत्वाचे दुवे (Quick Links)</h3>
                <ul class="space-y-2">
                    <li><a href="index.html" class="text-gray-400 hover:text-white transition-colors">मुख्यपृष्ठ</a></li>
                    <li><a href="side-effects.html" class="text-gray-400 hover:text-white transition-colors">दुष्परिणाम</a></li>
                    <li><a href="legal.html" class="text-gray-400 hover:text-white transition-colors">कायदेशीर माहिती</a></li>
                    <li><a href="pledge.html" class="text-gray-400 hover:text-white transition-colors">शपथ</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-white font-semibold text-lg mb-4">National Anti-Ragging Helpline</h3>
                <div class="p-4 glass-effect rounded-lg inline-block w-full">
                    <p class="text-gray-400 text-sm mb-1">Toll Free Number:</p>
                    <a href="tel:1800-180-5522" class="text-2xl font-bold text-red-400 hover:text-red-300 transition-colors">1800-180-5522</a>
                    <p class="text-gray-400 text-sm mt-3 mb-1">Email:</p>
                    <a href="mailto:helpline@antiragging.in" class="text-white hover:text-red-400 transition-colors">helpline@antiragging.in</a>
                </div>
            </div>
        </div>
        <div class="border-t border-gray-800 pt-8 text-center">
            <p class="text-gray-500 text-sm">© ${new Date().getFullYear()} विकास भोई . सर्व हक्क सुरक्षित.</p>
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Insert Navbar & Footer
    const headerElement = document.getElementById('header-placeholder');
    if (headerElement) headerElement.innerHTML = navbarHTML;

    const footerElement = document.getElementById('footer-placeholder');
    if (footerElement) footerElement.innerHTML = footerHTML;

    // Set Active Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-white', 'font-bold');
            link.classList.remove('text-gray-300');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icons = mobileBtn.querySelectorAll('svg');
            const svgOpen = icons[0];
            const svgClose = icons[1];

            if (mobileMenu.classList.contains('hidden')) {
                svgOpen.classList.remove('hidden');
                svgOpen.classList.add('block');
                svgClose.classList.add('hidden');
                svgClose.classList.remove('block');
            } else {
                svgOpen.classList.add('hidden');
                svgOpen.classList.remove('block');
                svgClose.classList.remove('hidden');
                svgClose.classList.add('block');
            }
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-lg', 'shadow-black/20');
            } else {
                navbar.classList.remove('shadow-lg', 'shadow-black/20');
            }
        });
    }
});
