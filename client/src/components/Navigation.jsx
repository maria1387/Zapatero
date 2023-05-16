import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { ZapateroContext } from "../context/ZapateroProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import { formatPrice } from "./format-price";
import { useDispatch } from "react-redux";
import { fetchProtectedInfo, onLogout } from "../api/auth";
import { useSelector } from "react-redux";
import { unauthenticateUser } from "../redux/slices/authSlice";
const Navigation = () => {
  const { total } = useContext(ZapateroContext);

  // const [theme, setTheme] = useState('light');
  const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //     if (theme === 'dark') {
  //         document.documentElement.classList.add('dark');
  //     } else {
  //         document.documentElement.classList.remove('dark');
  //     }
  // }, [theme]);

  // const handleThemeSwitch = () => {
  //     setTheme(theme === 'dark' ? 'light' : 'dark');
  // };

  // const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [protectedData, setProtectedData] = useState(null);

  const logout = async () => {
    try {
      await onLogout();

      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
      setToggle(!toggle);
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
    <Navbar fluid={true} rounded={false}>
      <nav className="border-blue-900 bg-blue-900 dark:bg-gray-800 fixed w-full z-10 top-0 left-0 border-b dark:border-gray-700 ">
        <div className=" container1 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            /> */}

            <h1 className="self-center text-2xl font-medium  whitespace-nowrap text-gray-50 ">
              Zapatero
            </h1>
          </div>

          <div className="hidden lg:block">
            <ul className="flex flex-col font-medium  rounded-lg bg-blue-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {isAuth ? (
                <div className="flex flex-col font-medium mt-4 rounded-lg bg-blue-900 md:flex-row lg:space-x-8 lg:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                  {/* <button
                    onClick={() => logout()}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Logout
                  </button> */}
                </div>
              ) : (
                <div className="flex flex-col font-medium mt-4 rounded-lg bg-blue-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
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
                </div>
              )}
            </ul>
          </div>

          <div className="lg:hidden flex align-middle justify-center p-1">
            <IconContext.Provider value={{ size: 30 }}>
              <GiHamburgerMenu
                onClick={() => setToggle(!toggle)}
                style={{ color: "white" }}
              />
            </IconContext.Provider>
          </div>

          {toggle ? (
            <div className="  bg-blue-900 dark:bg-gray-600 rounded-lg dark:text-white w-full">
              <div>
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-blue-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                  {isAuth ? (
                    <div className=" navbar-table text-center">
                      <NavLink
                        onClick={() => setToggle(!toggle)}
                        to="/dashboard"
                        className=" block  mt-2  text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        Dashboard
                      </NavLink>
                      <NavLink
                        onClick={() => setToggle(!toggle)}
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
                    <div className="navbar-table">
                      <li>
                        <NavLink
                          onClick={() => setToggle(!toggle)}
                          to="/"
                          className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                          Home
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          onClick={() => setToggle(!toggle)}
                          to="/shop"
                          className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                          Productos
                        </NavLink>
                      </li>

                      <li>
                        <div className="nav__icons">
                          <NavLink
                            onClick={() => setToggle(!toggle)}
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
                          onClick={() => setToggle(!toggle)}
                          to="/login"
                          className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                          Login
                        </NavLink>
                      </li>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </Navbar>
  );
};
export default Navigation;
