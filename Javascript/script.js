function showRegister(){
    document.querySelector(".login").style.display = "none";
    document.querySelector(".register").style.display = "block";
}

function login(){
    document.querySelector(".login").style.display = "block";
    document.querySelector(".register").style.display = "none";
}
    function speak(text) {
    const message = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(message);
}
document.querySelector('.register form').addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        e.preventDefault();
        speak("Invalid email format. Please enter a valid email.");
        alert("Invalid email format!");
    }
});
document.querySelector('.login form').addEventListener('submit', function (e) {
    const firstname = document.querySelector('.login input[name="firstname"]').value;
    const password = document.querySelector('.login input[name="password"]').value;

    // Example: simulate not registered
    if (firstname !== "registeredUser" || password !== "1234") {
        e.preventDefault();
        speak("You are not registered yet. Please register first.");
        alert("You are not registered!");
    }
});

const slides = document.querySelectorAll('.carousel-images img');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}
