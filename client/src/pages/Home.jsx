import Carusel from "../components/Carusel";
import TimerCount from "../UI/TimerCount";
import Helmet from "../components/Helmet/Helmet";
import '../App.css'
import ListCard from "../UI/ListCard";
import Footer from "../components/Footer";




const Home = () => {
  return (

    <Helmet title={"Home"}>
      
   
      
       
        <Carusel />
   
        <h1 className="flex justify-center">Productos Destacados </h1>
     
        <div className="container1  grid mb-8  dark:border-gray-700 md:mb-12 md:grid-cols-3 gap-4 mx-auto w-full max-w-screen-xl p-4 py-6 ">
         <ListCard/>
          
        </div>
      
     <TimerCount/>
     <Footer/>
    
    </Helmet>
  );
};

export default Home;
