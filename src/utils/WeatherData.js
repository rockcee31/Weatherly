import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const weatherContext = createContext();

export const WeatherData = ({ children }) => {
  
  const [location, setLocation] = useState({ lat: null, lon: null });
 
  const [WheatherReport, setWheatherReport] = useState(null);
  const [daysForecast, setDaysForecast] = useState(null);

  

  
  // Get current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error fetching location:", error);
        alert(
          "Failed to fetch location. Please enable location services and reload."
        );
      }
    );
  }, []);

  // Fetch current weather
  useEffect(() => {
    if (location.lat && location.lon) {
      const API_KEY = "b32213853f5d791fb81218b40de1bb04";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`;

      axios
        .get(url)
        .then((response) => {
          setWheatherReport(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [location]);

  // Fetch 5-day forecast
  useEffect(() => {
    if (location.lat && location.lon) {
      const fetchWeather = async () => {
        
        try {
          const response = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,sunshine_duration,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_probability_max,wind_speed_10m_max,shortwave_radiation_sum`
          );
          setDaysForecast(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
  
      fetchWeather();
    }
  }, [location]);

  return (
    <weatherContext.Provider value={{ WheatherReport,daysForecast,setLocation }}>
      {children}
    </weatherContext.Provider>
  );
};

