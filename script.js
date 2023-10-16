async function getWeather() {
    const apiKey = 'c17b074b364e4e02bd9145215232207';
    const city = document.getElementById('city').value;
/*This defines an asynchronous function named getWeather. The async keyword means that the function can use the await keyw
ord inside it to handle asynchronous operations in a more readable manner. This function is typically used to fetch weather data from a weather API.*/
    if (!city) {
      alert('Please enter a city name');
      return;
    }

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.error) {
        alert('City not found. Please check the spelling or try a different city.');
        return;
      }

      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Weather: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather Icon">
      `;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('An error occurred while fetching weather data. Please try again later.');
    }
  }
   const weatherIcon = document.getElementById('weather-icon');
      switch (weatherInfo) {
        case 'rain':
          weatherIcon.innerHTML = '<i class="fas fa-cloud-showers-heavy"></i>';
          break;
        case 'clear':
          weatherIcon.innerHTML = '<i class="fas fa-sun"></i>';
          break;
        case 'clouds':
          weatherIcon.innerHTML = '<i class="fas fa-cloud"></i>';
          break;
        case 'snow':
          weatherIcon.innerHTML = '<i class="fas fa-snowflake"></i>';
          break;
        // Add more cases for other weather conditions as needed
        default:
          weatherIcon.innerHTML = '<i class="fas fa-question"></i>'; // Default icon for unknown weather
          break;
      }