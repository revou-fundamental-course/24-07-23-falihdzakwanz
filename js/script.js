/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
let icon = document.getElementById("hamburger-icon");
function hamburgerMenu() {
    let link = document.getElementById("myLinks");
    if (link.style.display === "block") {
        link.style.display = "none";
    } else {
        link.style.display = "block";
    }
}

icon.addEventListener("click", hamburgerMenu);

let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("container-slider");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();

const contactForm = document.getElementById("contact-form");

function validateForm() {
    let nameValue = document.getElementById("name").value;
    let emailValue = document.getElementById("email").value;
    let destinationValue = document.getElementById("destination").value;
    let statusMessage = document.getElementById("status-message");
    let text;
    if (nameValue.length < 3) {
        text = "Please enter valid name!";
        statusMessage.innerHTML = text;
        return false;
    }
    if (emailValue.indexOf("@") == -1 || emailValue.length < 6) {
        text = "Please enter valid email!";
        statusMessage.innerHTML = text;
        return false;
    }
    if (destinationValue == "") {
        text = "Please select destination!";
        statusMessage.innerHTML = text;
        return false
    }

    alert("From Submitted Succesfully!");
    return true;
}

contactForm.addEventListener("submit", validateForm);