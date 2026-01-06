import { FiShoppingCart } from "react-icons/fi";

// Este componente recibe "props" (datos) para que sea reutilizable
function ProductCard({ imagen, nombre, precio, precioOriginal }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden flex flex-col">
      
      {/* 1. La Imagen del Producto */}
      <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
        <img 
          src={imagen} 
          alt={nombre} 
          className="h-full object-contain group-hover:scale-110 transition-transform duration-300" 
        />
        {/* Etiqueta de Oferta (Solo si hay precio original) */}
        {precioOriginal && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
            OFERTA
          </span>
        )}
      </div>

      {/* 2. La Información */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-gray-800 font-semibold text-sm mb-1 line-clamp-2 min-h-[40px]">
          {nombre}
        </h3>
        
        <div className="mt-auto">
          {/* Precios */}
          <div className="flex gap-2 items-end mb-3">
            <span className="text-xl font-bold text-blue-600">S/ {precio}</span>
            {precioOriginal && (
              <span className="text-xs text-gray-400 line-through mb-1">S/ {precioOriginal}</span>
            )}
          </div>

          {/* Botón de Agregar */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <FiShoppingCart />
            Agregar
          </button>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;