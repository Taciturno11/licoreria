import HeroCarousel from '../components/HeroCarousel';
import ProductCard from '../components/ProductCard';

// Importamos una imagen temporalmente (luego pondrás fotos de cada botella)
import ejemploBotella from '../assets/portada1.png'; 

function HomePage() {
  
  // Esta es tu "Base de Datos" temporal
  const productos = [
    { id: 1, nombre: "Cerveza Pilsen Callao 630ml (Pack x12)", precio: "54.90", precioOriginal: "60.00", img: ejemploBotella },
    { id: 2, nombre: "Whisky Johnnie Walker Red Label 750ml", precio: "49.90", precioOriginal: "65.00", img: ejemploBotella },
    { id: 3, nombre: "Ron Cartavio Selecto 5 Años 750ml", precio: "28.50", precioOriginal: null, img: ejemploBotella },
    { id: 4, nombre: "Four Loko Gold 473ml (Lata)", precio: "14.00", precioOriginal: null, img: ejemploBotella },
    { id: 5, nombre: "Pisco Portón Mosto Verde 750ml", precio: "85.00", precioOriginal: "95.00", img: ejemploBotella },
  ];

  return (
    <>
      <HeroCarousel />

      {/* SECCIÓN DE PRODUCTOS */}
      <div className="max-w-[1100px] mx-auto px-4 py-12">
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          🔥 <span className="border-b-4 border-blue-500">Ofertas de la Semana</span>
        </h2>

        {/* Rejilla (Grid) de Productos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {productos.map((producto) => (
            <ProductCard 
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              precioOriginal={producto.precioOriginal}
              imagen={producto.img} // Aquí pasamos la imagen
            />
          ))}
        </div>

      </div>
    </>
  );
}

export default HomePage;