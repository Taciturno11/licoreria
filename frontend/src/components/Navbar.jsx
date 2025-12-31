import { useState } from 'react'; // 1. IMPORTAMOS useState
import { Link } from 'react-router-dom';
import logo from '../assets/LogoChupaCausa.webp'; 
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
function Navbar() {
  // 2. CREAMOS EL ESTADO PARA CONTROLAR EL MENÚ
  // false = cerrado (al principio), true = abierto
  const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    <nav className="bg-white shadow-xl text-black px-8 py-1 flex justify-between items-center sticky top-0 z-50 backdrop-blur-sm">
      
      {/* 1. LADO IZQUIERDO: EL LOGO */}
      <div>
        <Link to="/">
          <img 
            src={logo} 
            alt="Logo Chupa Causa" 
            className="h-12 w-auto font-bold"
          />
        </Link>
      </div>

        
      {/* 2. LADO DERECHO: LOS ENLACES */}
      <ul className="flex gap-4 text-lg font-semibold items-center">

        {/* Nota: He quitado el link suelto de "Login" porque ahora estará dentro del menú desplegable */}

        {/* 3. MENÚ DESPLEGABLE (DROPDOWN) */}
        <li className="relative"> {/* 'relative' es vital para que el menú flote pegado a este botón */}
          
          {/* Botón que abre/cierra el menú */}
          <button 
            onClick={() => setMostrarMenu(!mostrarMenu)} // Al hacer click, invierte el valor (abre/cierra)
            className="hover:text-blue-500 transition-colors flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <FaRegUser className="text-2xl" />
            <div className='flex  flex-col leading-tight text-xs text-center'>
              <p>Iniciar</p>
              <p>Sesión</p> 
            </div>
          </button>

          {/* 4. LA CAJITA DEL MENÚ (Solo se muestra si mostrarMenu es true) */}
          {mostrarMenu && (
            <div className="absolute right-0 mt-3 w-48 z-50">
              {/* A.  El triángulo que apunta al botón */}
              <div className="absolute top-0 right-6 -mt-1 w-3 h-3 bg-white transform rotate-45 border-t border-l border-gray-200"></div>
              {/* B.  La caja del menú */}
              <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden relative">
              {/* Opción 1: Login */}
              <Link 
                to="/login"
                className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 text-sm border-b border-gray-100 transition-colors text-center"
                onClick={() => setMostrarMenu(false)} // Cierra el menú al hacer click
              >
                Loguearse
              </Link>

              {/* Opción 2: Registro */}
              <Link 
                to="/register"
                className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 text-sm transition-colors text-center"
                onClick={() => setMostrarMenu(false)} // Cierra el menú al hacer click
              >
                Registrarse
              </Link>
              </div>
            </div>
          )}

        </li>

        <div className="h-7 w-px bg-gray-300"></div>
        <li>
          <Link to="/compras" className="hover:text-blue-500 transition-colors flex items-center gap-2 cursor-pointer focus:outline-none" >
          <LuShoppingBag className='text-2xl' />
          <div className='flex flex-col text-xs leading-tight text-left'>
              <p>Mis</p>
              <p>Compras</p> 
          

          </div>
          </Link>
        </li>
        <div className="h-7 w-px bg-gray-300"></div>
         {/* Carrito de Compras */}
         <li>
         <Link to="/cart" className="hover:text-blue-500 transition-colors">
          
          <FiShoppingCart className="inline text-2xl ml-1" />
        </Link>

         </li>


      </ul>

    </nav>
  );
}

export default Navbar;