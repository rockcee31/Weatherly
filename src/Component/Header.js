import { FaSearch } from "react-icons/fa";
import file from "../utils/file.png";
import { BiCurrentLocation } from "react-icons/bi";
import { weatherContext } from "../utils/WeatherData";
import { useContext, useState } from "react";

const Header = () => {
  const [map, setMap] = useState(""); // For user input
  const { WheatherReport, setLocation } = useContext(weatherContext); // Weather context

  const fetchCoordinates = async () => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${map}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const { latitude: lat, longitude: lon } = data.results[0];
        const coordinates = { lat, lon };
        setLocation(coordinates); // Only update if valid coordinates
        console.log(`Coordinates for ${map}:`, coordinates);
      } else {
        alert("Location not found");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  // Ensure WheatherReport and setLocation are correctly handled
  if (!WheatherReport) return null;

  return (
    <div className="h-20 fixed w-full z-10 bg-black">
      <div className="flex items-center justify-between hs:mr-2 text-white mr-10">
        {/* Logo */}
        <div className="flex items-center mt-3 ml-10 hs:ml-2 ">
          <img src={file} alt="weather logo" className="h-15 w-14 hs:h-11 hs:w-10" />
          <h1 className="text-white font-economy text-2xl xsm:text-lg">Weatherly</h1>
        </div>

        {/* Search and Current Location */}
        <div className="flex items-center relative justify-between mr-5 gap-5">
          <input
            placeholder="location"
            onChange={(e) => setMap(e.target.value)}
            className="pl-4 py-2  focus:outline-none mt-3 rounded-lg bg-transparent border-b-2 w-48 hs:w-36"
          />
          <FaSearch
            className="left-40 hs:left-28 mt-3 text-gray-500 absolute"
            onClick={fetchCoordinates} // Fetch coordinates on click
          />
          <h1 className="font-economy mt-3 flex items-center xsm:hidden">
            <BiCurrentLocation />
            {WheatherReport.name} (India)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
