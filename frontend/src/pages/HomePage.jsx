import { Link } from 'react-router-dom';

function HomePage() {
  return (
    // Usamos flex para centrar el contenido en medio de la pantalla
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      {/* Caja semitransparente para que el texto se lea bien sobre el fondo */}
      <div className="bg-black/60 p-10 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl max-w-2xl">
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          CHUPA <span className="text-blue-500">CAUSA</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 font-light">
          Las mejores bebidas, al mejor precio y en la puerta de tu casa.
          <br />
          <span className="text-blue-400 font-semibold">¡Salud! 🍻</span>
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            to="/login" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            Comprar Ahora
          </Link>
          
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors">
            Ver Catálogo
          </button>
        </div>

      </div>

    </div>
  );
}

export default HomePage;