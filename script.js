// ======================
// SELECT ELEMENTS
// ======================

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const scrollTopBtn = document.getElementById("scrollTopBtn");

// ======================
// DARK MODE
// ======================

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

    });

}

// ======================
// MOBILE MENU
// ======================

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

}

// ======================
// SCROLL TO TOP
// ======================

if (scrollTopBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            scrollTopBtn.style.display = "block";

        } else {

            scrollTopBtn.style.display = "none";

        }

    });

    scrollTopBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}