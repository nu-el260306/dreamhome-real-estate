// ==========================================
// SELECT ELEMENTS
// ==========================================

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const favoriteButtons = document.querySelectorAll(".favorite-btn");

// ==========================================
// DARK MODE (Saved)
// ==========================================

// Load saved theme
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

}

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

});

// ==========================================
// MOBILE MENU
// ==========================================

menuBtn.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link){

    link.addEventListener("click", function(){

        navLinks.classList.remove("active");

    });

});

// ==========================================
// FAVORITE BUTTON
// ==========================================

favoriteButtons.forEach(function(button){

    button.addEventListener("click", function(){

        if(button.textContent === "🤍"){

            button.textContent = "❤️";

        }else{

            button.textContent = "🤍";

        }

    });

});

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

// Create the button using JavaScript

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

// Show / Hide button

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        scrollBtn.style.display = "block";

    }else{

        scrollBtn.style.display = "none";

    }

});

// Scroll to top

scrollBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// ==========================================
// PROPERTY SEARCH & FILTER
// ==========================================

const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const priceFilter = document.getElementById("priceFilter");
const searchBtn = document.getElementById("searchBtn");

const propertyCards = document.querySelectorAll(".property-card");

searchBtn.addEventListener("click", function(){

    const searchValue = searchInput.value.toLowerCase().trim();
    const selectedType = typeFilter.value;
    const selectedPrice = priceFilter.value;

    propertyCards.forEach(function(card){

        const location = card.dataset.location.toLowerCase();
        const type = card.dataset.type;
        const price = Number(card.dataset.price);

        let showCard = true;

        // Search by location
        if(searchValue !== "" && !location.includes(searchValue)){
            showCard = false;
        }

        // Filter by property type
        if(selectedType !== "" && type !== selectedType){
            showCard = false;
        }

        // Filter by price
        if(selectedPrice !== "" && price > Number(selectedPrice)){
            showCard = false;
        }

        if(showCard){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});

// ==========================================
// VIEW DETAILS BUTTON
// ==========================================

const detailsButtons = document.querySelectorAll(".details-btn");

detailsButtons.forEach(function(button){

    button.addEventListener("click", function(){

        window.location.href = "property-details.html";

    });

});