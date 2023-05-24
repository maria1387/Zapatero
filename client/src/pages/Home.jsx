import Carusel from "../components/Carusel";
import TimerCount from "../components/UI/TimerCount";
import Helmet from "../components/Helmet/Helmet";
import "../App.css";
import ListCard from "../components/UI/ListCard";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { ZapateroContext } from "../context/ZapateroProvider";
import Title from "../components/Title";

const Home = () => {
  const { ZapateroData } = useContext(ZapateroContext);
  const [destacadoProducts, setDestacadoProducts] = useState([]);
  useEffect(() => {
    const filterDestacadoProducts = ZapateroData.filter(
      (item) => item.outstanding === "destacado"
    );

    setDestacadoProducts(filterDestacadoProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Helmet title={"Home"}>
      <Carusel />
<section className="">
      <div className=" text-center text-3xl flex justify-center  my-20 ">
        <Title h1=" Productos Destacados" className="" />
      </div>

      <div className="  grid mb-8  dark:border-gray-700 md:mb-12 md:grid-cols-3 gap-4 mx-auto w-full max-w-screen-xl p-4 py-6  ">
        <ListCard data={destacadoProducts} />
      </div>
      </section>
      <TimerCount />
      <Footer />
    </Helmet>
  );
};

export default Home;
