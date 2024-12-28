import { useContext } from "react";
import { weatherContext } from "../utils/WeatherData";

import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import wind from "../assets/wind.png";
import rain from "../assets/rain.png";

import getWeatherIcon from "../utils/getweathericon";

const Day1 = () =>{
const {daysForecast} = useContext(weatherContext);


function convertToDay(dates) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    return dates.map(date => {
      const dayIndex = new Date(date).getDay();
      return daysOfWeek[dayIndex];
    });
  }
  const {daily}= daysForecast;
  const {time,temperature_2m_max,temperature_2m_min,sunrise,sunset,sunshine_duration,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_probability_max,wind_speed_10m_max,shortwave_radiation_sum} = daily;
  
const Days= convertToDay(time);

  
  const convertTo12HourTime = (datetime) => {
    const date = new Date(datetime);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
  
    // Determine AM/PM
    const ampm = hours >= 12 ? "PM" : "AM";
  
    // Convert to 12-hour format
    hours = hours % 12 || 12;
  
    return `${hours}:${minutes} ${ampm}`;
  };
  
  const sunriseTimeArray = sunrise.map(convertTo12HourTime);
  const sunsetTimeArray = sunset.map(convertTo12HourTime);

  const arr = [1,2,3,4,5];
  if(!daysForecast || !daily){
    return <div></div>;
  }
  else
   return(
            arr.map((elem,index)=>{
              const weatherData = {
                precipitation_sum: precipitation_sum[index],
                rain_sum: rain_sum[index],
                showers_sum: showers_sum[index],
                snowfall_sum: snowfall_sum[index],
                shortwave_radiation_sum: shortwave_radiation_sum[index],
                sunshine_duration: sunshine_duration[index],
                maximum_wind_speed: wind_speed_10m_max[index],
              };
             const weathericon = getWeatherIcon(weatherData)
            return( 
              <div className="flex flex-col items-center mt-16 ml-12 hs:ml-0" key={index}>
              <div >
                   
                  <h1 className="text-5xl text-center w-[309px]">{Days[index]}</h1>
                  <p className="3xl text-center">{time[index]}</p>
              </div>
               
  
             <div className="w-60"><img src={weathericon} alt="weather-icon" ></img></div>
             <div className="flex gap-2 items-center justify-center mt-4">
                   <h1 className="text-5xl">{temperature_2m_max[index]?.toFixed(0)}°C</h1>
                   <h1 className="text-5xl">|</h1>
                   <h1 className="text-5xl">{temperature_2m_min[index]?.toFixed(0)}°C</h1>
              </div>
  
              <div className="">
                  <div className="flex justify-between gap-10 ml-2">
                    
                      <div className="w-28 h-10 flex text-nowrap  items-center">
                        <img className="w-10" src={sun} alt="sun"></img> 
                        <h1 className="w-14">{sunriseTimeArray[index]}</h1>
                      </div>
                      
                    

                      
                      <div className="w-28 h-10 flex text-nowrap items-center ">
                        <img className="w-10"  src={moon} alt="moon"></img>
                        <h1 className="w-14">{sunsetTimeArray[index]}</h1>
                      </div>
                  </div>
  
                  <div className="flex justify-between ml-2">

                      <div className="w-28 h-10 flex text-nowrap  items-center">
                        <img className="w-10" src={wind} alt="wind"></img> 
                        <h1 className="w-14">{wind_speed_10m_max[index]?.toFixed(1)}km</h1>
                      </div>
                      
                      <div className="w-28 h-10 flex text-nowrap  items-center">
                        <img className="w-10" src={rain} alt="rain"></img> 
                        <h1 className="w-14">{precipitation_probability_max[index]?.toFixed(1)}%</h1>
                      </div>
                      

                  </div>
                  
              </div>
  
  
  
          </div>)
          })
         
    
)}
export default Day1;
