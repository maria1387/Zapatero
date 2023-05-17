import { useState } from "react";
import { Link,  } from "react-router-dom";
// import axios from "axios";
import Input from "../components/Input";
// import { toast } from "react-toastify";
import Title from "../components/Title";
import Button from "../components/Button";
import Helmet from "../components/Helmet/Helmet";
import { onRegistration } from '../api/auth'

import Sidebar from "../components/Sidebar";
const Register = () => {
  // const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
    roles:"",
  })
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await onRegistration(values)

      setError('')
      setSuccess(data.message)
      setValues({ email: '', password: '', roles:''  })
      // navigate("/login");
    } catch (error) {
      setError(error.response.data.errors[0].msg)
      setSuccess('')
    }
  }
  return (
    <>
    <Sidebar/>
    <Helmet title={"Register"}>
    <section className=" w-80 mx-auto flex justify-center mt-12 ">
      <div className=" mt-12 mb-10 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#"  onSubmit={(e) => onSubmit(e)}>
          <Title
            h1=" Registrate"
            className="text-xl font-medium text-gray-900 dark:text-white"
          />
 
       
          <div>
            <Title
              titleLabel=" Ingresa tu Email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            />
            <Input
             placeholder='test@gmail.com'
             type="email"
             name="email"
             id="email"
             value={values.email}
             onChange={(e) => onChange(e)}
             required
             autoComplete="off"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div>
            <Title
              titleLabel=" Ingresa tu contraseña"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            />
            <Input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={(e) => onChange(e)}
              required
              placeholder='passwod'
              autoComplete="off"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div>
              <Title
                titleLabel=" rol "
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              />
              <select
                value={values.roles}
                onChange={(e) => onChange(e)}
                name="roles"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Seleccione el rol</option>
                <option value="admin">Admin</option>
                <option value="client">Client</option>
           
              </select>
            </div>
          <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
        <div style={{ color: 'green', margin: '10px 0' }}>{success}</div>

          <Button
            type="submit"
            textButton="Registrate"
            className=" w-full text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          />

          <div>
            <Link
              to="/"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
           
              Volver al inicio
            </Link>
          </div>
        </form>
      </div>
      </section>
     
      </Helmet>
      </>
  );
};
export default Register;
