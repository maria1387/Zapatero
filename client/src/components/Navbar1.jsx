import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { formatPrice } from "./format-price";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProtectedInfo, onLogout } from "../api/auth";

import { unauthenticateUser } from "../redux/slices/authSlice";
import { ZapateroContext } from "../context/ZapateroProvider";
const Navbar1 = () => {
  const [nav, setNav] = useState(false);
  //   const [clicked, setClicked]= useState(false)
  const handleNav = () => {
    setNav(!nav);
  };

  const { total } = useContext(ZapateroContext);

  // const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [protectedData, setProtectedData] = useState(null);

  const logout = async () => {
    try {
      await onLogout();
      setNav(!nav);
      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
    } catch (error) {
      console.log(error.response);
    }
  };

  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedInfo();

      setProtectedData(data.info);

      // setLoading(false)
    } catch (error) {
      logout();
    }
  };

  useEffect(() => {
    protectedInfo();
  }, []);

  return (
    <section className="">
      <nav className="border-blue-900 bg-blue-900 dark:bg-blue-900 fixed w-full z-10 top-0 left-0 border-b dark:border-gray-700 ">
        <div className=" container1 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />

            <h1 className="self-center text-2xl font-medium  whitespace-nowrap text-gray-50 ">
              Zapatero
            </h1>
          </div>
          <ul className="hidden md:flex">
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-blue-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-200 md:dark:bg-transparent dark:border-gray-700">
              {isAuth ? (
                <div className="navbar-table text-center">
                  <NavLink
                    to="/dashboard"
                
                    className=" block  mt-2  text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/register"
                 
                    className=" block  mt-2 text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Register
                  </NavLink>
                  <button
                  
                    onClick={() => logout()}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/"
                      className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/shop"
                      className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Productos
                    </NavLink>
                  </li>

                  <li>
                    <div className="nav__icons">
                      <NavLink
                        className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        to={"/cart"}
                      >
                        Carrito
                        <p className="">${formatPrice(total)}</p>
                      </NavLink>
                    </div>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <ul
            className={
              nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-bg-blue-900 bg-blue-900 ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            {isAuth ? (
              <div className="navbar-table text-center">
                <NavLink
                  onClick={ handleNav}
                  to="/dashboard"
                  className=" block  mt-2  text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Dashboard
                </NavLink>
                <NavLink
                  onClick={ handleNav}
                  to="/register"
                  className=" block  mt-2 text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Register
                </NavLink>
                <button
               
                  onClick={() => logout()}
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <li>
                  <NavLink
                 onClick={ handleNav}
                    to="/"
                    className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                   onClick={ handleNav}
                    to="/shop"
                    className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Productos
                  </NavLink>
                </li>

                <li>
                  <div className="nav__icons">
                    <NavLink
                     onClick={ handleNav}
                      className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      to={"/cart"}
                    >
                      Carrito
                      <p className="">${formatPrice(total)}</p>
                    </NavLink>
                  </div>
                </li>
                <li>
                  <NavLink
                   onClick={ handleNav}
                    to="/login"
                    className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar1;
