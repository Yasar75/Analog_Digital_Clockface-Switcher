// Digital Clock
updateDigitalClock = () => {
    const now = new Date();
    
    let hours = now.getHours();
    hours = hours % 12 || 12;
    
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const meridien = hours >= 12 ? "PM" : "AM";
    const timeString = `${hours}:${minutes}:${seconds} ${meridien}`;
    
    document.getElementById("digitalClock").textContent = timeString;
}

// Analog Clock
updateAnalogClock = () => {
    const now = new Date();
    const seconds = (now.getSeconds() + now.getMilliseconds() / 1000) / 60 * 360;
    const minutes = (now.getMinutes() + now.getSeconds() / 60) / 60 * 360;
    const hours = (now.getHours() + now.getMinutes() / 60) / 12 * 360;

    document.getElementById("meridien").textContent = now.getHours() >= 12 ? "PM" : "AM";
    document.getElementById("secondHand").style.transform = `rotate(${seconds}deg)`;
    document.getElementById("minuteHand").style.transform = `rotate(${minutes}deg)`;
    document.getElementById("hourHand").style.transform = `rotate(${hours}deg)`;
    
    requestAnimationFrame(updateAnalogClock);
}

// Date
updateDate = () => {
    const now = new Date();
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const dayOfWeek = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const dateString = `${dayOfWeek} ${day}, ${month} ${year}`;
    
    document.getElementById("date").textContent = dateString;
}

// Digital / Analog Clock Switching
toggleClock = () => {
    const digitalClock = document.getElementById("digitalClock");
    const analogClock = document.getElementById("analogClock");
    const button = document.querySelector("button");

    if (digitalClock.style.display === "none") {
        digitalClock.style.display = "block";
        analogClock.style.display = "none";
        button.textContent = "Switch to Analog Clock";
    } else {
        digitalClock.style.display = "none";
        analogClock.style.display = "block";
        button.textContent = "Switch to Digital Clock";
    }
}

//Intialization
updateDigitalClock();
setInterval(updateDigitalClock, 1000);
requestAnimationFrame(updateAnalogClock);
updateDate();
setInterval(updateDate, 1000 * 60 * 60 * 24);
