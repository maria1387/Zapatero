// import { Link } from "react-router-dom";
import Clock from "./Clock";
import imagen from "../../assets/img/imagen5.jpg";
import Title from "../Title";

const TimerCount = () => {
  return (
    <section className="bg-blue-700 py-20 ">
      <div className="container1 w-full flex justify-center mb-10">
        <a
          href="#"
          className="flex flex-col items-center bg-blue-700 border border-blue-700 rounded-lg  md:flex-row md:max-w-full hover:bg-blue-700 dark:border-blue-700 dark:bg-blue-700 text-white  "
        >
          <div className="flex flex-col justify-between  leading-normal p-10">
            
            <div className="text-2xl flex justify-center mb-10">
              <Title h1="    Nueva Promoción de Zapatos" />
            </div>
            <p className="mb-3 font-normal text-white  ">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
			<Clock/>
          </div>
          <img
            className="object-cover w-full rounded-lg h-120 md:h-auto md:w-8/12 md:rounded-lg"
            src={imagen}
            alt=""
          />
        </a>
      </div>
    </section>
  );
};

export default TimerCount;
