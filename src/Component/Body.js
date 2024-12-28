import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "./Earth";
import { Suspense } from "react";
import Sidediv from "./Sidediv";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { useContext } from "react";
import { weatherContext } from "../utils/WeatherData";
import Time from "./Time";
import Desc1 from "./Desc1"
import Desc from "./Desc";

const Body = () => {

  function convertToDate(unixTimestamp) {
    // Convert the UNIX timestamp to milliseconds
    const date = new Date(unixTimestamp * 1000);
  
    // Format the date
    const options = {
      day: 'numeric',
      month: 'long', // For full month name (e.g., "December")
      year: 'numeric',
      timeZone: 'Asia/Kolkata', // Indian timezone
    };
  
    // Format the date using Intl.DateTimeFormat
    return new Intl.DateTimeFormat('en-IN', options).format(date);
  }
  

  function convertToIST(unixTimestamp) {
    // Convert the UNIX timestamp to milliseconds
    const date = new Date(unixTimestamp * 1000);
  
    // Get the options for formatting the time
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      
      timeZone: 'Asia/Kolkata', // Indian timezone
      hour12: true,            // To show 12-hour format with AM/PM
    };
  
    // Format the time using Intl.DateTimeFormat
    return new Intl.DateTimeFormat('en-IN', options).format(date);
  }
  
  
  
  function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(0); // Convert and round to 2 decimal places
}
  const {WheatherReport} = useContext(weatherContext)
  console.log(WheatherReport)
  if (!WheatherReport) {
    return null;
  }
  return (
    <div className="w-full min-h-screen pt-20 flex flex-col font-mono gap-5 bg-black text-white ">
      {/* Left Section */}
      <div className="rounded-2xl overflow-hidden mt-5 ml-10 hs:ml-4 flex gap-5">
        {/* Left Inner Section */}
        <div className="flex flex-col h-2/3 justify-between items-center xsm:hidden">
          {/* Date & Time */}
          <div className="h-16 font-economy text-center">
            <Time/>
            <h1 className="text-2xl mid:text-sm">{convertToDate(WheatherReport.sys.sunrise)}</h1>
          </div>

          {/* Earth Animation */}
          <div className="mt-24 ">
            <Canvas className="hover:scale-105 " style={{ width: '340px', height: '550px'}}>
              <ambientLight />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
              <Suspense fallback={null}>
                <Earth />
              </Suspense>
            </Canvas>
          </div>
        </div>

        {/* Right Inner Section */}
        <div className="flex flex-col  pt-8">
          {/* Weather Details */}
          <div className="mt-10 font-economy  flex justify-between ">
            <div className="h-40  text-center">
              <h2 className="text-4xl mid:text-2xl font-exo small:text-sm xsm:text-2xl">{WheatherReport.name}</h2>
              <h2 className="text-xl mid:text-sm small:text-xs">Mostly Sunny</h2>
              <h3 className="text-4xl mid:text-xl small:text-sm">{kelvinToCelsius(WheatherReport.main.temp)}°C</h3>
            </div>

            <div className="mr-40 xsm:mr-0 xsm:pr-3 xsm:mt-1 text-center mid:mt-4 small:mt-0">
              <div className="text-lg flex items-center mid:text-sm small:text-xs"><div className="w-10 h-10 mid:w-5 mid:h-5"><img src={sun} alt=""></img></div><p className="text-nowrap">Sunrise: {convertToIST(WheatherReport.sys.sunrise)}</p></div>
              <div className="text-lg flex items-center mid:text-sm small:text-xs"><div className="w-10 h-10 mid:w-5 mid:h-5"><img src={moon} alt=""></img></div><p className="text-nowrap">Sunset: {convertToIST(WheatherReport.sys.sunset)}</p></div>
            </div>
          </div>

          {/* Weather Description */}
          <div className="flex h-96 items-center text-2xl mid:text-xl font-economy text-center mb-28 pr-5">
            <h1>
              Weatherly is a sleek and responsive weather app that provides real-time forecasts
              with automatic geolocation, delivering accurate updates for any location in India and beyond.
            </h1>
          </div>
        </div>
      </div>

      {/*  Section */}
     
        <div className="justify-around flex mt-20">
        <Desc1/>
        <Sidediv />
        <Desc/>
         </div>
         
     
      <div>
      

      </div>
    </div>
  );
};

export default Body;
