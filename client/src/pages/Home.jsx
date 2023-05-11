import Carusel from "../components/Carusel";
import TimerCount from "../UI/TimerCount";
import Helmet from "../components/Helmet/Helmet";
import "../App.css";
import ListCard from "../UI/ListCard";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { ZapateroContext } from "../context/ZapateroProvider";

const Home = () => {
  const { ZapateroData } = useContext(ZapateroContext);
  const [destacadoProducts, setDestacadoProducts] = useState([]);
  useEffect(() => {
    const filterDestacadoProducts = ZapateroData.filter(
      (item) => item.destacado === "destacado"
    );

    setDestacadoProducts(filterDestacadoProducts);
  }, []);

<<<<<<< HEAD
=======

const Home = () => {
  const { ZapateroData } = useContext(ZapateroContext);
  const [destacadoProducts, setDestacadoProducts] = useState([]);
  useEffect(() => {
    const filterDestacadoProducts = ZapateroData.filter(
      (item) => item.destacado === "destacado"
    );
  
    setDestacadoProducts(filterDestacadoProducts);

  }, []);
 
>>>>>>> db0443a396991cf5b2fd4e765b866fc5d8077bca
  return (
    <Helmet title={"Home"}>
<<<<<<< HEAD
      <Carusel />

      <h1 className="flex justify-center">Productos Destacados </h1>

      <div className="  grid mb-8  dark:border-gray-700 md:mb-12 md:grid-cols-3 gap-4 mx-auto w-full max-w-screen-xl p-4 py-6 ">
        <ListCard data={destacadoProducts} />
      </div>

      <TimerCount />
      <Footer />
=======
      
   
      
       
        <Carusel />
   
        <h1 className="flex justify-center">Productos Destacados </h1>
     
        <div className="  grid mb-8  dark:border-gray-700 md:mb-12 md:grid-cols-3 gap-4 mx-auto w-full max-w-screen-xl p-4 py-6 ">
         <ListCard data={destacadoProducts}/>
          
        </div>
      
     <TimerCount/>
     <Footer/>
    
>>>>>>> db0443a396991cf5b2fd4e765b866fc5d8077bca
    </Helmet>
  );
};

export default Home;
