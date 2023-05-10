import imagen from "../assets/img/imagen-fondo.jpg"
// import imagen1 from "../assets/img/imagen8.jpg"
import imagen2 from "../assets/img/imagen-fondo1.jpg"
// import imagen3 from "../assets/img/imagen10.jpg"
import imagen4 from "../assets/img/imagen-fondo2.jpg"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const Carusel = () => {
	return (

     
        <div className="home  ">
          <p className="home-p">Ven a conocer nuestro Zapatos</p>
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
