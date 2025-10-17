
document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('tips').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('countdown').scrollIntoView({ behavior: 'smooth' });
});
const examDate = new Date("2025-12-31T09:00:00").getTime(); 

function updateCountdown() {
    const now = new Date().getTime();
    const distance = examDate - now;

    if (distance < 0) {
        document.getElementById('days').innerText = 0;
        document.getElementById('hours').innerText = 0;
        document.getElementById('minutes').innerText = 0;
        document.getElementById('seconds').innerText = 0;
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); 
document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('countdown').scrollIntoView({ behavior: 'smooth' });
});
const modal = document.getElementById("resourcesModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


window.addEventListener("click", (event) => {
    if(event.target === modal){
        modal.style.display = "none";
    }
});

const subscribeBtn = document.getElementById("subscribeBtn");
const emailInput = document.getElementById("emailInput");
const subscribeMsg = document.getElementById("subscribeMsg");

subscribeBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        subscribeMsg.innerText = "Please enter your email.";
        subscribeMsg.style.color = "#ffcccb";
    } else if(!emailRegex.test(email)){
        subscribeMsg.innerText = "Please enter a valid email address.";
        subscribeMsg.style.color = "#ffcccb";
    } else {
        subscribeMsg.innerText = "Thank you for subscribing!";
        subscribeMsg.style.color = "#c8ffb2";
        emailInput.value = "";
    }
});