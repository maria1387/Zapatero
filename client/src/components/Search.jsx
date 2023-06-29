import PropTypes from "prop-types";
import Input from "./Input";
import { useState } from "react";

const Search = ({ setSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue;
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    setSearch(searchValue);

    setSearchValue("");
  };

  return (
    <div className="">
      <div className="relative">
        <Input
          className="block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar por Modelo o Nombre"
          value={searchValue}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};
Search.propTypes = {
  setSearch: PropTypes.func,
};
export default Search;
