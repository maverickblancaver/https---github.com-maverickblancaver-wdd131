document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  
    // Set last modified date in footer (change this to actual modification date)
    const lastModifiedDate = new Date('2024-07-10'); // Replace with actual date
    document.getElementById('lastModified').textContent = lastModifiedDate.toDateString();
  
    // Static values for weather details (replace with actual values if available)
    const currentTempCelsius = 30; // Example temperature in Celsius
    const windSpeedKmh = 10; // Example wind speed in km/h
  
    // Function to calculate wind chill factor
    function calculateWindChill(temperature, windSpeed, unit) {
      if (unit === 'metric') { // Metric (Celsius, km/h)
        if (temperature <= 10 && windSpeed > 4.8) {
          const windChill = Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
          return `${windChill} °C`;
        } else {
          return 'N/A';
        }
      } else if (unit === 'imperial') { // Imperial (Fahrenheit, mph)
        if (temperature <= 50 && windSpeed > 3) {
          const windChill = Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
          return `${windChill} °F`;
        } else {
          return 'N/A';
        }
      } else {
        return 'N/A';
      }
    }
  
    // Display weather details
    document.getElementById('currentTemp').textContent = `${currentTempCelsius} °C`;
    document.getElementById('windSpeed').textContent = `${windSpeedKmh} km/h`;
    const windChill = calculateWindChill(currentTempCelsius, windSpeedKmh, 'metric');
    document.getElementById('windChill').textContent = windChill;
  });
  