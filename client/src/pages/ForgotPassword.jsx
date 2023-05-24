import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = {
      email: e.target.email.value,
    };
	setIsLoading(true);
	await axios.post("http://localhost:8001/forgotpassword", userEmail).then(()=>{

	setIsLoading(false)
	Swal.fire({
        showConfirmButton: true,
        text: "Revise su email, se le  ha enviado un enlace para  crear una nueva contraseña",
        icon: 'success',
        
	})	
	}).catch((error)=>{
		console.log(error)
		setIsLoading(false)
		Swal.fire({
			showConfirmButton: true,
			text: "ha habido un error al intentar enviar los datos, comprueba el correo introducido o vuelva a intentarlo más tarde",
			icon: 'error',
			
		})	
	})

  };

  return (
    <div className="mt-32">
      <form onSubmit={handleSubmit}>
        <h3>Recuperar Cuenta</h3>
        <div>Correo electronico</div>
		<input type="email" name="email" placeholder="introduce tu Email" required />
		<div>
			{
				isLoading ?
				<div>
					<h2>loading...</h2>
				</div>
				:
				<button type="submit">Enviar</button>
			}
		</div>
      </form>
    </div>
  );
};

export default ForgotPassword;
