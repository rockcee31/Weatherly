import snowIcon from "../assets/snow.png";
import rainIcon from "../assets/rain.png";
import sunnyIcon from "../assets/sunny.png";
// import partlyCloudyIcon from "../assets/partly-cloudy.png";
import windyIcon from "../assets/windy.png";
import cloudyIcon from "../assets/cloudy.png";

function getWeatherIcon(data) {
  const {
    precipitation_sum,
    rain_sum,
    showers_sum,
    snowfall_sum,
    shortwave_radiation_sum,
    sunshine_duration,
    maximum_wind_speed,
  } = data;

  if (snowfall_sum > 0) {
    return snowIcon; // Snow Icon
  } else if (rain_sum > 0 || precipitation_sum > 0 || showers_sum > 0) {
    return rainIcon; // Rain Icon
  } else if (shortwave_radiation_sum > 200 || sunshine_duration > 4) {
    return sunnyIcon; // Sunny Icon
  } else if (shortwave_radiation_sum > 100) {
    return cloudyIcon; // Partly Cloudy Icon
  } else if (maximum_wind_speed > 15) {
    return windyIcon; // Windy Icon
  } else {
    return cloudyIcon; // Default Cloudy Icon
  }
}

export default getWeatherIcon;