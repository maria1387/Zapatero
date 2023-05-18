/* eslint-disable no-undef */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { ZapateroContext } from "../context/ZapateroProvider"; //
import { useParams } from "react-router-dom";
import { useContext } from "react";
const CarusellDetails = () => {
  const { ZapateroData } = useContext(ZapateroContext);
  const { id } = useParams();
  console.log(id);

  const ZapateroCarrusel = ZapateroData.find((zapatero) => String(zapatero.id) === id);
  return (
    <div className="carousel-root1 " >
        <Carousel autoPlay infiniteLoop showIndicators={false}className=""  >
    <div >
      <img alt="" src={ZapateroCarrusel && ZapateroCarrusel.img} />
   
    </div>
    <div>
      <img alt="" src={ZapateroCarrusel && ZapateroCarrusel.img1} />

    </div>
    <div>
      <img alt="" src={ZapateroCarrusel && ZapateroCarrusel.img3} />
    
    </div>
    <div>
      <img alt="" src={ZapateroCarrusel && ZapateroCarrusel.img2} />
      
    </div>
   
   
  </Carousel>
    </div>
  );
};

export default CarusellDetails;
