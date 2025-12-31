import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import logo from '../assets/LogoChupaCausa.webp'; 
// Agregamos FaSearch y FaBars para la barra de búsqueda y categorías
import { FaRegUser, FaSearch, FaBars } from "react-icons/fa"; 
import { FiShoppingCart } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";

function Navbar() {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    // CAMBIO 1: El nav sigue igual, pero ahora actúa como "fondo"
    <nav className="bg-white shadow-xl text-black sticky top-0 z-50 backdrop-blur-sm">
      
      {/* CAMBIO 2 (EL SECRETO): Creamos un contenedor que limita el ancho y centra todo (mx-auto) */}
      <div className="w-full max-w-[1100px] mx-auto px-4 py-2 flex justify-between items-center gap-6">

        {/* 1. LADO IZQUIERDO: LOGO + BOTÓN CATEGORÍAS */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img 
              src={logo} 
              alt="Logo Chupa Causa" 
              className="h-12 w-auto font-bold hover:scale-105 transition-transform"
            />
          </Link>
          
          {/* Botón de Categorías (Estilo Coolbox) */}
          <button className="hidden lg:flex items-center gap-2 font-bold text-sm bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full transition-colors">
            <FaBars />
            Menú
          </button>
        </div>

        {/* 2. NUEVO: BARRA DE BÚSQUEDA CENTRAL (Ocupa el espacio sobrante) */}
        <div className="hidden md:flex flex-1 max-w-xl relative">
          <input 
            type="text" 
            placeholder="Buscar licores, cervezas..." 
            className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600">
            <FaSearch />
          </button>
        </div>
        
        {/* 3. LADO DERECHO: TUS ENLACES (INTACTOS) */}
        <ul className="flex gap-4 text-lg font-semibold items-center">

          {/* MENÚ DESPLEGABLE (DROPDOWN) - TU CÓDIGO EXACTO */}
          <li className="relative">
            <button 
              onClick={() => setMostrarMenu(!mostrarMenu)} 
              className="hover:text-blue-500 transition-colors flex items-center gap-2 cursor-pointer focus:outline-none"
            >
              <FaRegUser className="text-2xl" />
              <div className='hidden lg:block flex flex-col leading-tight text-xs text-center'>
                <p>Iniciar</p>
                <p>Sesión</p> 
              </div>
            </button>

            {mostrarMenu && (
              <div className="absolute right-0 mt-3 w-48 z-50">
                <div className="absolute top-0 right-6 -mt-1 w-3 h-3 bg-white transform rotate-45 border-t border-l border-gray-200"></div>
                <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden relative">
                  <Link 
                    to="/login"
                    className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 text-sm border-b border-gray-100 transition-colors text-center"
                    onClick={() => setMostrarMenu(false)}
                  >
                    Loguearse
                  </Link>
                  <Link 
                    to="/register"
                    className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 text-sm transition-colors text-center"
                    onClick={() => setMostrarMenu(false)}
                  >
                    Registrarse
                  </Link>
                </div>
              </div>
            )}
          </li>

          {/* TU SEPARADOR */}
          <div className="h-7 w-px bg-gray-300 hidden lg:block"></div>
          
          {/* MIS COMPRAS - TU CÓDIGO EXACTO */}
          <li>
            <Link to="/compras" className="hover:text-blue-500 transition-colors flex items-center gap-2 cursor-pointer focus:outline-none" >
              <LuShoppingBag className='text-2xl' />
              <div className='hidden lg:block flex flex-col text-xs leading-tight text-left'>
                  <p>Mis</p>
                  <p>Compras</p> 
              </div>
            </Link>
          </li>
          
          {/* TU SEPARADOR */}
          <div className="h-7 w-px bg-gray-300 hidden lg:block"></div>
          
          {/* CARRITO - TU CÓDIGO EXACTO */}
          <li>
            <Link to="/cart" className="hover:text-blue-500 transition-colors">
              <FiShoppingCart className="inline text-2xl ml-1" />
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;