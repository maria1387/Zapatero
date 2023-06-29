import { useState } from "react";
import { Link,   } from "react-router-dom";
// import axios from "axios";
import Input from "../components/Input";
// import { toast } from "react-toastify";
import Title from "../components/Title";
import Button from "../components/Button";
import Helmet from "../components/Helmet/Helmet";
import { onRegistration } from '../api/auth'
import Footer from "../components/Footer";


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
   
    <Helmet title={"Register"}>
    <section className=" w-80 mx-auto flex justify-center mt-12 ">
      <div className=" mt-12  w-full max-w-sm p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        <form className="space-y-6 mt-10" action="#"  onSubmit={(e) => onSubmit(e)}>
        <div className="text-2xl flex justify-center mb-10">
              <Title h1=" Register" />
            </div>
 
       
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
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          />

          <div>
            <Link
              to="/Login"
              className="ml-auto text-center text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
           
              Volver al Login
            </Link>
          </div>
        </form>
      </div>
      </section>
      <Footer />
      </Helmet>
      </>
  );
};
export default Register;
