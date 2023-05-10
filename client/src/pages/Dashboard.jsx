/* eslint-disable react/prop-types */
import {  useState } from "react";
import Button from "../components/Button";
import Search from "../components/Search";


import Table from "../components/Table";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Sidebar from "../components/Sidebar";
import Helmet from "../components/Helmet/Helmet";
// import ClipLoader from "react-spinners/ClipLoader";
// import Footer from "../components/Footer";
const Dashboard = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  
 
  return (
    <>
     <Helmet title={"Dashboard"}>

       
          <Sidebar/>
      <div className=" p-4 sm:ml-64 mt-28 flex justify-center">
        <div className=" container1    ">
          <Title h1=" esta pagina es una tienda de venta de zapatos"className="flex justify-center"/> 
          <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="flex justify-center">
            <Button
              variant=""
              textButton="Nuevo Ingreso"
              className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => navigate("/form/new")}
            />
            </div>
            <div className="">
            <Search setSearch={setSearch}/>
            </div>
          </div>
          <Table search={search} />
        </div>
      </div>
      </Helmet>
        </>
     


    
  
  );
};

export default Dashboard;
