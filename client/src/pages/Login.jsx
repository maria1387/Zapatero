import { useState } from "react";
import { onLogin } from "../api/auth";

import { useDispatch } from "react-redux";
import { authenticateUser } from "../redux/slices/authSlice";
import { NavLink, useNavigate } from "react-router-dom";

import Title from "../components/Title";
import Button from "../components/Button";
import Input from "../components/Input";
import Helmet from "../components/Helmet/Helmet";
import Footer from "../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await onLogin(values);
      
      if(values === values.email){
        navigate("/dashboard")
      }else{
        navigate("/perfil")
      }

      dispatch(authenticateUser());

      localStorage.setItem("isAuth", "true");
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <Helmet title={"Login"}>
      <section className=" w-80 mx-auto flex justify-center mt-12 mb-7 ">
        <div className=" mt-12  w-full max-w-sm p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          <form className="space-y-6 mt-10" onSubmit={(e) => onSubmit(e)}>
            <div className="text-2xl flex justify-center mb-10">
              <Title h1=" Login" />
            </div>

            <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
            <div>
              <Title
                titleLabel=" Ingresa tu Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <Input
                value={values.email}
                placeholder="test@gmail.com"
                onChange={(e) => onChange(e)}
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                id="email"
                required
              />
            </div>
            <div>
              <Title
                titleLabel=" Ingresa tu Contraseña"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <Input
                value={values.password}
                onChange={(e) => onChange(e)}
                type="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="password"
                required
                id="password"
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 mr-4"
                    required
                  />
                </div>

                <Title
                  htmlFor="remember"
                  titleLabel=" Recuerdame"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                />
              </div>
              <a
                href="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                ¿Olvidaste tú password?
              </a>
            </div>

            <Button
              type="submit"
              textButton="login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            />

            {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Si no posees cuenta,
            <NavLink
              to="/Register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
           
              Registrate
            </NavLink>
          </div> */}
            <div>
              <NavLink
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                to="/"
              >
                Volver al inicio
              </NavLink>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </Helmet>
  );
};

export default Login;
