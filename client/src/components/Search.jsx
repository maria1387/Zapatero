/* eslint-disable react/prop-types */
import Input from "./Input";

const Search = ({ setSearch }) => {
  const inputBuscar = (e) => {
    setSearch(e);
  };
  return (
    <div className="">
      <Input
        className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Buscar por Modelo o Nombre"
        onChange={(e) => {
          inputBuscar(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
