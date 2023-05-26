import { useEffect, useState } from "react";
// import axios from "axios";
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const FormZapatero = () => {

  const [inventory, setInventory] = useState({
    name: "",
    model: "",
    img: "",
    img1: "",
    img2: "",
    img3: "",
    description: "",
    price: "",
    category: "",
    outstanding: "",
    sku:"",
    
  });

  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(task);

    if (editing) {
      // console.log('updata')
      const response = await fetch(
        `http://localhost:8001/productos/${params.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inventory),
        }
      );

      const data = await response.json();
      console.log(data);
    } else {
      await fetch("http://localhost:8001/productos", {
        method: "POST",
        body: JSON.stringify(inventory),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // console.log(data);
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    setInventory({ ...inventory, [e.target.name]: e.target.value });
  };

  //para traer una tarea al edit
  const loadTask = async (id) => {
    const res = await fetch(`http://localhost:8001/productos/${id}`);
    const data = await res.json();
    //  console.log(data)
    setInventory({
      name: data.name,
      model: data.model,
      img: data.img,
      img1: data.img1,
      img2: data.img2,
      img3: data.img3,
      description: data.description,
      price: data.price,
      category: data.category,
      outstanding: data.outstanding,
      sku:data.sku
      
    });
    setEditing(true);
  };

  //ESTE SE USE EFFECT SE OCUPA PARA EDITAR
  useEffect(() => {
    // console.log(params);
    if (params.id) {
      // console.log('fech task')
      loadTask(params.id);
    }
  }, [params.id]);

  return (
    <>
      <Sidebar />
      <div className=" p-4 sm:ml-64 mt-32   ">
        <form className=" container1 space-y-6" onSubmit={handleSubmit}>
        <div className="text-2xl flex justify-center mb-10">
        <Title
            h1={editing ? "Editar Inventario " : " Inventario nuevo "}
           
          />
          </div>
          {/* <Title
            h1={editing ? "Editar Inventario " : " Inventario nuevo "}
            className="  mb-2 text-sm font-medium text-gray-900 dark:text-white"
          /> */}
          <div className=" grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <Title
                titleLabel=" Ingresa EL Nombre de Producto "
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <Input
                type="text"
                name="name"
                id="name"
                value={inventory.name}
                onChange={handleChange}
                required
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <Title
                titleLabel=" Ingresa Modelo Producto "
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <Input
                type="text"
                name="model"
                id="model"
                value={inventory.model}
                onChange={handleChange}
                required
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <Title
                titleLabel=" Ingresa sku Producto "
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <Input
                type="number"
                name="sku"
                id="sku"
                value={inventory.sku}
                onChange={handleChange}
                required
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <Title
                titleLabel=" Ingresa imagen URL "
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <Input
                type="text"
                name="img"
                id="img"
                value={inventory.img}
                onChange={handleChange}
                required
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <Title
                titleLabel=" Ingresa  Segunda imagen URL "
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <Input
                type="text"
                name="img1"
                id="img1"
                value={inventory.img1}
                onChange={handleChange}
                required
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <Title
                titleLabel=" Ingresa  Tecera imagen URL "
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <Input
                type="text"
                name="img2"
                id="img2"
                value={inventory.img2}
                onChange={handleChange}
                required
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <Title
                titleLabel=" Ingresa  Cuarta imagen URL "
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <Input
                type="text"
                name="img3"
                id="img3"
                value={inventory.img3}
                onChange={handleChange}
                required
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <Title
                titleLabel=" Ingresa una Descripcion "
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <Input
                type="text"
                name="description"
                id="description"
                value={inventory.description}
                onChange={handleChange}
                required
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <Title
                titleLabel="Ingresa el  precio "
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <Input
                type="number"
                name="price"
                id="price"
                value={inventory.price}
                onChange={handleChange}
                required
                autoComplete="off"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white   "
              />
            </div>
            <div>
              <Title
                titleLabel=" Categoria "
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <select
                value={inventory.category}
                onChange={handleChange}
                name="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Seleccione un categoria</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Ninos">Niños</option>
              </select>
            </div>

            <div>
              <Title
                titleLabel=" Destacado "
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <select
                value={inventory.outstanding}
                onChange={handleChange}
                name="outstanding"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Seleccione un item</option>
                <option value="destacado">Destacado</option>
                <option value="No destacado">no detacado</option>
              </select>
            </div>
          </div>

          <div className=" grid gap-6 mb-6 md:grid-cols-2 sm:mb-28">
            <Button
              type="submit"
              textButton="Guardar"
              disabled={
                !inventory.name ||
                !inventory.sku ||
                !inventory.img ||
                !inventory.img1 ||
                !inventory.img2 ||
                !inventory.img3 ||
                !inventory.description ||
                !inventory.price ||
                !inventory.category ||
                !inventory.outstanding||
                !inventory.model
              }
              className=" w-full text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            />

            <Button
              textButton="Cancelar"
              onClick={() => navigate(`/dashboard`)} 
              className="w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormZapatero;
