import Footer from "../components/Footer";
import not from "../assets/img/not.jpg"
import Title from "../components/Title";
const NotFound = () => {
	return (
		<div className="text-center">
		
		<div className=" mt-20 text-3xl flex justify-center ">
              <Title h1="  Pagina no encontrada" className="text-center"/>
            </div>
			<div className=" flex justify-center ">
			<img src={not} alt="" />
			</div>
			<Footer/>
		
		</div>
	)
};

export default NotFound;
