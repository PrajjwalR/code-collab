/* scripts.js */
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Initial call to set the time immediately
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
