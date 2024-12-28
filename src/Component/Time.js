import { useState, useEffect } from 'react';

const Time = () => {
  const [time, setTime] = useState('');

  const updateTime = () => {
    // Get the current time
    const date = new Date();

    // IST timezone offset in milliseconds (5 hours 30 minutes = 19800 seconds)
    const timezoneOffset = 19800 * 1000;

    // Adjust the time for IST
    const adjustedDate = new Date(date.getTime() + timezoneOffset);

    // Get the hours and minutes
    let hours = adjustedDate.getHours();
    const minutes = adjustedDate.getMinutes();

    // Determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12 for 12 AM

    // Format time as HH:MM AM/PM
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;

    // Update the state with the new time
    setTime(formattedTime);
  };

  // Update the time every minute (60000 ms)
  useEffect(() => {
    const intervalId = setInterval(updateTime, 60000); // Update every 60000ms (1 minute)

    // Initial call to set the time immediately when the component mounts
    updateTime();

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    
      <h1> {time}</h1>
  
  );
};

export default Time;