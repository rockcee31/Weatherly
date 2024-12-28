import { clear } from "@testing-library/user-event/dist/clear";
import { MdVisibility } from "react-icons/md";
import { PiWindBold } from "react-icons/pi";

async function Page2(){
    const temperatureData = [
        { day: "Mon", high: 63, low: 51 },
        { day: "Tue", high: 65, low: 52 },
        { day: "Wed", high: 60, low: 49 },
        { day: "Thu", high: 62, low: 50 },
        { day: "Fri", high: 64, low: 53 },
      ];
   return(
   <div className="h-screen bg-white"> 
         <div>
         <div className="w-96 mt-20 h-fit   flex flex-col text-white p-4 rounded-lg  border-2 border-gray-600 font-economy">
      {/* Top Image Section */}
      <div className="w-64 mx-auto">
        <img src={clear} alt="clear logo" />
      </div>

      {/* Main Temperature and Condition Section */}
      <div className="flex gap-2 items-center justify-center mt-4">
        <h1 className="text-5xl">°C</h1>
        <div className="flex flex-col">
          <p>{}</p>
         
        </div>
      </div>

      {/* Forecast Section */}
      <div className="flex gap-2 justify-center items-center mt-4 ">
        {/* Today Forecast Box */}
        <div className="w-20  border-gray-50 h-fit rounded-lg flex flex-col items-center">
          <p>TODAY</p>
          <div className="w-10 h-10">
            <img src={clear} alt="null" />
          </div>
          <h4>51°/63°</h4>
        </div>

        {/* Wind & Visibility Boxes */}
        <div className="flex flex-col gap-4">
          <div className="w-40   rounded-lg p-2 flex flex-col items-center">
            <p className="font-medium flex items-center gap-2"> <PiWindBold size={30}/> Wind</p>
            <h4 className="text-lg">12 km/h</h4>
          </div>
          <div className="w-40  rounded-lg p-2 flex flex-col items-center">
            <p className="font-medium flex items-center gap-2"><MdVisibility size={25}/> Visibility</p>
            <h4 className="text-lg">10 km</h4>
          </div>
        </div>
      </div>

      {/* Temperature Chart Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-center mb-4">Weekly Temperature</h2>
        <div className="grid grid-cols-5 gap-4">
          {temperatureData.map((temp, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-400 rounded-lg p-2"
            >
              <p className="font-medium">{temp.day}</p>
              <div className="h-10 flex flex-col items-center justify-center">
                <span className="text-red-500 text-nowrap">H: {temp.high}°</span>
                <span className="text-blue-500">L: {temp.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
         </div>
       </div>)
}
export default Page2;