

import { useContext } from "react";
import CarusellDetails from "../components/CaruselDetails";
import iconTras from "../assets/img/ico-shipping.png";
import pago from "../assets/img/pago.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ZapateroContext } from "../context/ZapateroProvider"; //
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { formatPrice } from "../components/format-price";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Title from "../components/Title";

const ZapateroDetalles = () => {
  const { ZapateroData, agregar } = useContext(ZapateroContext);
  const { id } = useParams();
  console.log(id);

  const ZapateroDetail = ZapateroData.find(
    (zapatero) => String(zapatero.id) === id
  );
  return (
    <Helmet title={ZapateroDetail && ZapateroDetail.name}>
      <div >
        <section className=" container1   flex justify-center">
          <div className="mt-12">
            <div className=" mt-12  mb-12 grid  md:grid-cols-2   flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xxl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
              <CarusellDetails />

              <div className="flex flex-col p-5  text-center  text-gray-800 border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700 ">
                <div className="  flex flex-col items-center justify-center  bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700  ">
                  <p className="text-xl font-bold mb-3">
                   
                    {ZapateroDetail && ZapateroDetail.model}
                  </p>
                  <div className="text-3xl flex justify-center  ">
                    <Title h1={ZapateroDetail && ZapateroDetail.name} />
                  </div>
                  <p>sku: {ZapateroDetail && ZapateroDetail.sku}</p>
                  <p className="my-4">
                    {ZapateroDetail && ZapateroDetail.description}
                  </p>
                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex justify-around ml-12">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${formatPrice(ZapateroDetail && ZapateroDetail.price)}
                      </h2>
                      <Button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-12 "
                        textButton="Añadir 🛒"
                        onClick={() =>
                          agregar(ZapateroDetail && ZapateroDetail.id)
                        }
                      />
                    </div>
                  </div>
                  <h3 className=" font-bold ">Tipo de entrega</h3>
                <div className=" flex justify-between md:flex-row md:max-w-xl">
                  <img src={iconTras} alt="" />
                  <h3 className="font-bold ml-2 mt-3">Depacho a domicilio</h3>
                </div>
                <div className=" flex  md:flex-row md:max-w-xl ">
                  
                  <h4 className="font-bold ml-2 mt-3">Paga en <span className="text-red-600"> 6</span> cuotas de  <span className="text-red-600">$5.832 </span>sin interés </h4>
                  <div className=" flex  md:flex-row md:max-w-xl ">
                  <img src={pago}  className="img-pago " alt="" />
                  </div>
                </div>
                <h3>¡Consiguelos ya! Quedan pocas unidades en stock</h3>
                </div>
               
                
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Helmet>
  );
};

export default ZapateroDetalles;
