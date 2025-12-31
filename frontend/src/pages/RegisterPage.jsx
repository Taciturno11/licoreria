import logo from '../assets/LogoChupaCausa.webp';
import { FaUserPlus } from "react-icons/fa";

function RegisterPage() {
    return (
        <div className=" min-h-screen p-40">
            <div className=" max-w-sm mx-auto bg-gray-300 bg-opacity-50 p-4  rounded shadow-md ">
                <img 
                    className="ml-16" 
                    src={logo} 
                    alt="Logo" 
                />

                <form className="mt-4 flex flex-col gap-3 max-w-sm mx-auto  p-3 ">
                    <label>Usuario</label>
                    <input
                        type="text" 
                        placeholder="Cree un usuario" 
                        className = "border p-2 rounded"
                    />
                    
                    <label>Email</label>
                    <input
                        type="email" 
                        placeholder="ingrese su correo" 
                        className = "border p-2 rounded"
                    />

                    <label>Contraseña</label>
                    <input
                        type="password" 
                        placeholder="Cree una contraseña" 
                        className = "border p-2 rounded"
                    />

                    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Registrarse
                    </button>
                </form>
        
            </div>
      </div>  
    );
}

// 🚨 ESTA ES LA LÍNEA QUE TE FALTABA 🚨
export default RegisterPage;