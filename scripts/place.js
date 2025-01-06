document.addEventListener('DOMContentLoaded', () => {
    // Footer content
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;

    // Windchill calculation
    const temp = 10; // Static temperature in °C
    const windSpeed = 15; // Static wind speed in km/h
    const windChillElement = document.getElementById('wind-chill');

    function calculateWindChill(temp, windSpeed) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
    }

    if (temp <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temp, windSpeed) + "°C";
    } else {
        windChillElement.textContent = "N/A";
    }
});