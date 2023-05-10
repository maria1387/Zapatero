/* eslint-disable react/prop-types */

import { useContext } from "react";
import CarusellDetails from "../components/CaruselDetails";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ZapateroContext } from "../context/ZapateroProvider"; //
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { formatPrice } from "../components/format-price";
import Button from "../components/Button";
import Footer from "../components/Footer";


const ZapateroDetalles = () => {
  const { ZapateroData, agregar } = useContext(ZapateroContext);
  const { id } = useParams();
  console.log(id);

  const ZapateroDetail = ZapateroData.find(
    (zapatero) => String(zapatero.id) === id
  );
  return (
    <Helmet title={ZapateroDetail && ZapateroDetail.name}>
      <div>
        <section className="   w-12/12 flex justify-center">
          <div
            className=" 
      
       w-7/12 flex justify-center  mt-12   "
          >
            <div className="  mt-12 grid mb-8   md:mb-12 md:grid-cols-2   flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xxl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <CarusellDetails />

              <div className="flex flex-col items-center justify-center p-8 text-center bg-wh text-gray-800 border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                  <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h1 className="bg-green-100 text-green-800 text-4xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      {ZapateroDetail && ZapateroDetail.name}
                    </h1>
                    <p className="my-4">
                      {ZapateroDetail && ZapateroDetail.description}
                    </p>
                  </blockquote>

                  <div className="space-y-0.5 font-medium dark:text-white text-left">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${formatPrice(ZapateroDetail && ZapateroDetail.price)}
                    </span>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <Button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                        textButton="Añadir 🛒"
                        onClick={() =>
                          agregar(ZapateroDetail && ZapateroDetail.id)
                        }
                      />
                    </div>
                  </div>
               
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
