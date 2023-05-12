import { useEffect, useState } from "react";
// import '../../style/clock.css'
const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;
  const countDown = () => {
    const destination = new Date("Dec 30, 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days),
          setHours(hours),
          setMinutes(minutes),
          setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  }, []);
  return (
    <div className="clock__wrapper d-flex align-item-center gap-3 ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-auto  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  ">
            <div className="text-left">
              <h1 className="mb-1 text-2xl text-fuchsia-600/100">{days}</h1>
              <h5 className="-mt-1 font-sans text-sm font-semibold">Days</h5>
            </div>
			<span className="text-white fs-3 ml-10">:</span>
          </div>
       
        </div>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-auto   focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  ">
            <div className="text-left">
              <h1 className="mb-1 text-xl">{hours}</h1>
              <h5 className="-mt-1 font-sans text-sm font-semibold">Hours</h5>
            </div>
			<span className="text-white fs-3 ml-10">:</span>
          </div>
        
        </div>

        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-auto focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  ">
            <div className="text-left">
              <h1 className="mb-1 text-xl">{minutes}</h1>
              <h5 className="-mt-1 font-sans text-sm font-semibold ">Minutes</h5>
            </div>
			<span className="ml-10 text-white fs-3">:</span>
          </div>
        
        </div>

        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-auto focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5   ">
            <div className="text-left">
              <h1 className="mb-1 text-xl">{seconds}</h1>
              <h5 className="-mt-1 font-sans text-sm font-semibold">Seconds</h5>
            </div>
			
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
