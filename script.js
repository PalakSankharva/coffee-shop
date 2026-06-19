// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==========================
// CLOSE MENU AFTER CLICK
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ==========================
// STICKY NAVBAR
// ==========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.padding = "12px 8%";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    }
    else{
        navbar.style.padding = "18px 8%";
        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";
    }

});

// ==========================
// CONTACT FORM
// ==========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    form.querySelector('input[type="text"]').value;

    const email =
    form.querySelector('input[type="email"]').value;

    if(name.trim()==="" || email.trim()===""){
        alert("Please fill all fields");
        return;
    }

    alert("Thank You " + name + "! Message Sent Successfully.");

    form.reset();

});

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 16px";
topBtn.style.fontSize = "20px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(
            link.getAttribute("href")
            .includes(current)
        ){
            link.classList.add("active-link");
        }

    });

});

// ==========================
// MENU CARD BUTTONS
// ==========================

let cartCount = 0;

function addToCart(itemName){

    cartCount++;

    alert(
        itemName +
        " added to cart.\nTotal Items: " +
        cartCount
    );

}

// ==========================
// DARK MODE
// ==========================

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

}

// ==========================
// SCROLL REVEAL
// ==========================

const reveals = document.querySelectorAll(
".about, .card, .gallery img, .testimonial"
);

function revealElements(){

    reveals.forEach(item => {

        const top =
        item.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if(top < windowHeight - 100){

            item.style.opacity = "1";
            item.style.transform =
            "translateY(0px)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform =
    "translateY(50px)";
    item.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
"scroll",
revealElements
);

revealElements();

// ==========================
// COFFEE ORDER BUTTON
// ==========================

function orderNow(){

    alert(
      "Thank you for choosing Brew Haven!\nYour order page is opening."
    );

}

// ==========================
// SPECIAL OFFER POPUP
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        alert(
        "☕ Special Offer!\nGet 20% OFF on your first coffee order."
        );

    }, 3000);

});