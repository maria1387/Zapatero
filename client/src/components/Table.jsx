import { useContext, useState } from "react";
import { ZapateroContext } from "../context/ZapateroProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import  Swal from "sweetalert2"

/* eslint-disable react/prop-types */
const Table = () => {
  const navigate = useNavigate();
  const { ZapateroData, setZapateroData } = useContext(ZapateroContext);

  const totalProducts = ZapateroData.length;

  const [productsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * productsPerPage; // = 2*6 =12
  const firstIndex = lastIndex - productsPerPage; // = 12-6 =6

  const handleEdit = async (id) => {
    navigate(`/edit/${id}`);
  };

  //para elimimar
  const handleDelete = async (id) => {
    try {

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
           //eliminar backend
     await axios.delete(`http://localhost:8001/inventario/${id}`, {});

      // console.log(response)
      //eliminar frondEnd


      setZapateroData(ZapateroData.filter((item) => item.id !== id));
        }
      })
     
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-3 ">
        <table className=" mb-3 w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">{Image}</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {ZapateroData?.map((item, index) => (
              <tr
                key={index}
                className="bg-gray-300 border-blue-400 hover:bg-gray-500"
              >
                <td className="w-32 p-4">
                  <img src={item.img1} alt="Apple Watch" />
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.description}</td>
                <td className="px-6 py-4">{item.categoria}</td>
                <td className="px-6 py-4">${item.price}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="font-medium text-white hover:underline ml-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="font-medium text-white hover:underline ml-3"
                  >
                    eliminar
                  </button>
                </td>
              </tr>
            )).slice(firstIndex, lastIndex)}
          </tbody>
        </table>
        <div className="flex justify-center my-4">
          <Pagination
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalProducts={totalProducts}
          />
        </div>
      </div>
    </>
  );
};

export default Table;
