import { useContext, useRef } from "react";
import { weatherContext } from "../utils/WeatherData";
import Day1 from "./Day1";
import gsap from "gsap";

const Sidediv = () => {
  const day1Ref = useRef(null);
  const { daysForecast, WheatherReport } = useContext(weatherContext);

  if (!daysForecast) {
    return null;
  }
  
  const { daily } = daysForecast;
  const { temperature_2m_max, temperature_2m_min, time } = daily;

  const convertToDay = (dates) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dates.map((date) => {
      const DayIndex = new Date(date).getDay();
      return daysOfWeek[DayIndex];
    });
  };

  const day0 = convertToDay(time);
  const day = day0.slice(0, 5);

  const transform = (index) => {
    const xOffset = index * -420; // Adjust according to div width
    gsap.to(day1Ref.current, {
      x: xOffset,
      duration: 0.5,
    });
  };

  if (WheatherReport == null) return null;

  return (
    <div className="w-[420px] hs:w-[320px] h-fit flex flex-col text-white rounded-lg border-2 border-gray-600 font-economy">
      {/* Top Image Section */}
      <div className="w-full h-full overflow-hidden">
        <div
          ref={day1Ref}
          className="flex gap-16 hs:gap-28 transition-transform duration-500"
        >
          <Day1 />
        </div>
      </div>
      {/* Temperature Chart Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-center mb-4">Weekly Temperature</h2>
        <div className="grid grid-cols-5 gap-4 pb-2 pl-2 pr-2">
          {day.map((temp, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-400 rounded-lg p-2 cursor-pointer hover:bg-white"
              onClick={() => transform(index)} // Fix for onClick
            >
              <p className="font-medium hs:text-xs">{index === 0 ? "Today" : temp.slice(0, 3) }</p>
              <div className="h-10 flex flex-col items-center justify-center">
                <span className="text-red-500 text-nowrap hs:text-xs">
                  H: {temperature_2m_max[index].toFixed(0)}°C
                </span>
                <span className="text-blue-500 text-nowrap hs:text-xs">
                  L: {temperature_2m_min[index].toFixed(0)}°C
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidediv;
