import { useNavigate } from "react-router-dom";
import imagen from "../assets/img/imagen-fondo.jpg"
// import imagen1 from "../assets/img/imagen8.jpg"
import imagen2 from "../assets/img/imagen-fondo1.jpg"
// import imagen3 from "../assets/img/imagen10.jpg"
import imagen4 from "../assets/img/imagen-fondo2.jpg"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Button from "./Button";
const Carusel = () => {
    const navigate = useNavigate();
	return (

     
        <div className="home   ">
         
           
          <p className="home-p">Ven a conocer nuestro Zapatos</p>
          <div className="grid justify-items-center">
          <Button type="submit" className="home-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  " textButton='ver más' onClick={() => navigate(`/shop/`)} />
          </div>
        <Carousel autoPlay infiniteLoop showThumbs={false}   >
        <div>
            <img src={imagen} className="carusel-home"/>
           
        </div>
        <div>
            <img src={imagen2}className="carusel-home"/>
           
        </div>
        <div>
            <img src={imagen4} className="carusel-home"/>
            
        </div>
    </Carousel>
</div>

	)
};

export default Carusel;
