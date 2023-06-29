import { useState } from "react";
// import { fetchForgotPassword } from "../api/auth";
import { NavLink } from "react-router-dom";

import Title from "../components/Title";
import Button from "../components/Button";
import Input from "../components/Input";
import Helmet from "../components/Helmet/Helmet";
import Footer from "../components/Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8001/api/forgot-password",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Helmet title="Olvido de Contraseña">
      <section className="w-80 mx-auto flex justify-center mt-12 mb-7">
        <div className="mt-12 w-full max-w-sm p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          <form className="space-y-6 mt-10" onSubmit={handleForgotPassword}>
            <div className="text-2xl flex justify-center mb-10">
              <Title h1="Olvido de Contraseña" />
            </div>

            <div>
              <Title
                titleLabel="Ingresa tu Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <Input
                defaultValue={email}
                placeholder="test@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                id="email"
                required
              />
            </div>

            <Button
              type="submit"
              textButton="Enviar solicitud de restablecimiento"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            />

            <div>
              <NavLink
                className="ml-auto text-center text-sm text-blue-700 hover:underline dark:text-blue-500"
                to="/login"
              >
                Volver Login
              </NavLink>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </Helmet>
  );
};

export default ForgotPassword;
