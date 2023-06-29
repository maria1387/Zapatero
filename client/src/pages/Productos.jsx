
import { useContext, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { ZapateroContext } from "../context/ZapateroProvider";
import ListCard from "../components/UI/ListCard";
import Search from "../components/Search";
import Title from "../components/Title";

const Productos = () => {
  const { ZapateroData } = useContext(ZapateroContext);
  const [productsData, setProductsData] = useState(ZapateroData);
  const [search, setSearch] = useState("");
  const handleFilter = (e) => {
    const filterValue = e.target.value
    if (filterValue === "category") {
      const filteredProduct = ZapateroData.filter(
        (item) => item.category 
      );
      setProductsData(filteredProduct);
    }
    if (filterValue === "Mujer") {
      const filteredProduct = ZapateroData.filter(
        (item) => item.category === "Mujer"
      );
      setProductsData(filteredProduct);
    }
    if (filterValue === "Hombre") {
      const filteredProduct = ZapateroData.filter(
        (item) => item.category === "Hombre"
      );
      setProductsData(filteredProduct);
    }
    if (filterValue === "Ninos") {
      const filteredProduct = ZapateroData.filter(
        (item) => item.category === "Ninos"
      );
      setProductsData(filteredProduct);
    }
  };


  return (
    <div>
      <Helmet title="Shop">
       

        <section className=" mt-24">
          <div className="text-3xl flex justify-center mb-10">
            <Title h1=" Calzados" />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2 ">
            <div className=" flex justify-center ">
              <select
                onChange={handleFilter}
                className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="category">Filtrar por categoría</option>
                <option value="Mujer">Mujer</option>
                <option value="Hombre">Hombre</option>
                <option value="Ninos">Niños</option>
              </select>
            </div>
            <div className="flex justify-center">
              <Search setSearch={setSearch} />
            </div>
          </div>
          <div>
            {ZapateroData.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <>
                <div className="  grid mb-8  dark:border-gray-700 md:mb-12 md:grid-cols-3 gap-4 mx-auto w-full max-w-screen-xl p-4 py-6 ">
                  <ListCard data={productsData} search={search} />
                </div>
              </>
            )}
          </div>
        </section>
      </Helmet>
    </div>
  );
};

export default Productos;
