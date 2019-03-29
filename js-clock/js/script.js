const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    // const secondsDegrees = ((seconds / 60) * 360) + 90;
    // To calculate the amount of degrees to rotate the seconds div
    const secondsDegrees = (seconds * 6) + 90;
    // ES6 template literal ``
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    // const minutesDegrees = ((minutes / 60) * 360) + 90;
    const minutesDegrees = (minutes * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    // const hoursDegrees = ((hours / 12) * 360) + 90;
    const hoursDegrees = (hours * 30) + 90;
    console.log(seconds);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);