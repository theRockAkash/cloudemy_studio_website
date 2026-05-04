(function () {
    "use strict";

    const SITE = {
        name: "Cloudemy Studio",
        tagline: "Record professional video lectures from your Android tablet",
        email: "studio@cloudemy.in",
        playStore: "https://play.google.com/store/apps/details?id=com.cloudemy.studio",
        youtube: "https://www.youtube.com/@theRockAkash",
        github: "https://github.com/theRockAkash",
        parent: "Cloudemy Digital Technologies Pvt. Ltd.",
        baseUrl: "https://studio.cloudemy.in"
    };

    const NAV_LINKS = [
        { label: "Features", href: "/#features" },
        { label: "About", href: "/about/" },
        { label: "Blog", href: "/blog/" },
        { label: "Contact", href: "/contact/" }
    ];

    /* ===== SVG ICONS ===== */
    const ICONS = {
        play: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
        youtube: '<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><path fill="#fff" d="M9.545 15.568V8.432L15.818 12z"/></svg>',
        email: '<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
        github: '<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>'
    };

    /* ===== HEADER ===== */
    function renderHeader() {
        const header = document.getElementById("site-header");
        if (!header) return;
        const linksHtml = NAV_LINKS.map(l =>
            `<a href="${l.href}">${l.label}</a>`
        ).join("");
        header.innerHTML = `
        <nav class="site-nav nav-dark" id="main-nav">
            <div class="nav-inner">
                <a href="/" class="nav-logo" aria-label="${SITE.name} Home">
                    <span class="nav-logo-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="#fff" stroke="none"/></svg>
                    </span>
                    ${SITE.name}
                </a>
                <div class="nav-links">
                    ${linksHtml}
                    <a href="${SITE.playStore}" class="nav-cta" target="_blank" rel="noopener">Download App</a>
                </div>
                <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>`;
    }

    /* ===== MOBILE MENU ===== */
    function renderMobileMenu() {
        const slot = document.getElementById("mobile-menu-slot");
        if (!slot) return;
        const linksHtml = NAV_LINKS.map(l =>
            `<a href="${l.href}">${l.label}</a>`
        ).join("");
        slot.innerHTML = `
        <div class="mobile-overlay" id="mobile-overlay"></div>
        <div class="mobile-menu" id="mobile-menu">
            ${linksHtml}
            <a href="${SITE.playStore}" class="nav-cta" target="_blank" rel="noopener">Download App</a>
        </div>`;

        const hamburger = document.getElementById("nav-hamburger");
        const menu = document.getElementById("mobile-menu");
        const overlay = document.getElementById("mobile-overlay");
        if (!hamburger || !menu || !overlay) return;

        function toggleMenu() {
            const isOpen = menu.classList.toggle("open");
            overlay.classList.toggle("open");
            hamburger.classList.toggle("open");
            hamburger.setAttribute("aria-expanded", isOpen);
            document.body.style.overflow = isOpen ? "hidden" : "";
        }
        hamburger.addEventListener("click", toggleMenu);
        overlay.addEventListener("click", toggleMenu);
        menu.querySelectorAll("a").forEach(a =>
            a.addEventListener("click", () => {
                if (menu.classList.contains("open")) toggleMenu();
            })
        );
    }

    /* ===== FOOTER ===== */
    function renderFooter() {
        const footer = document.getElementById("site-footer");
        if (!footer) return;
        const year = new Date().getFullYear();
        footer.innerHTML = `
        <footer class="site-footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <a href="/" class="nav-logo">
                            <span class="nav-logo-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="#fff" stroke="none"/></svg>
                            </span>
                            ${SITE.name}
                        </a>
                        <p>The ultimate Android app for educators to record professional video lectures from PDFs, PowerPoint presentations, and images with powerful annotation tools and 4K recording.</p>
                    </div>
                    <div class="footer-col">
                        <h4>Product</h4>
                        <a href="/#features">Features</a>
                        <a href="/#how-it-works">How It Works</a>
                        <a href="/#video-settings">Video Quality</a>
                        <a href="/#faq">FAQ</a>
                    </div>
                    <div class="footer-col">
                        <h4>Company</h4>
                        <a href="/about/">About Us</a>
                        <a href="/blog/">Blog</a>
                        <a href="/contact/">Contact</a>
                        <a href="https://www.cloudemy.in/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>
                    </div>
                    <div class="footer-col">
                        <h4>Resources</h4>
                        <a href="/blog/best-screen-recording-apps-for-teachers/">Best Screen Recorders</a>
                        <a href="/blog/how-to-record-video-lectures-from-pdf/">Record from PDF</a>
                        <a href="/blog/how-to-create-youtube-teaching-videos/">YouTube Teaching Videos</a>
                        <a href="${SITE.playStore}" target="_blank" rel="noopener">Google Play Store</a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <span>&copy; ${year} ${SITE.parent}. All rights reserved.</span>
                    <div class="footer-social">
                        <a href="${SITE.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${ICONS.youtube}</a>
                        <a href="${SITE.github}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>
                        <a href="mailto:${SITE.email}" aria-label="Email">${ICONS.email}</a>
                    </div>
                </div>
            </div>
        </footer>`;
    }

    /* ===== NAV SCROLL ===== */
    function initNavScroll() {
        const nav = document.getElementById("main-nav");
        if (!nav) return;
        let ticking = false;
        window.addEventListener("scroll", function () {
            if (!ticking) {
                requestAnimationFrame(function () {
                    if (window.scrollY > 50) {
                        nav.classList.add("nav-scrolled");
                    } else {
                        nav.classList.remove("nav-scrolled");
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    /* ===== SCROLL REVEAL ===== */
    function initScrollReveal() {
        const els = document.querySelectorAll(".fade-up");
        if (!els.length) return;
        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );
        els.forEach(function (el) { observer.observe(el); });
    }

    /* ===== FAQ TOGGLE ===== */
    function initFAQ() {
        document.querySelectorAll(".faq-question").forEach(function (btn) {
            btn.addEventListener("click", function () {
                const item = btn.closest(".faq-item");
                const isOpen = item.classList.contains("open");
                item.closest(".faq-list").querySelectorAll(".faq-item.open").forEach(function (i) {
                    i.classList.remove("open");
                });
                if (!isOpen) item.classList.add("open");
            });
        });
    }

    /* ===== INIT ===== */
    function init() {
        renderHeader();
        renderMobileMenu();
        renderFooter();
        initNavScroll();
        initScrollReveal();
        initFAQ();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
