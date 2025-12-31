import HeroCarousel from '../components/HeroCarousel';

function HomePage() {
  return (
    // Usamos un fragmento <> </> porque pronto agregaremos más cosas debajo del carrusel
    <>
      {/* Aquí va tu carrusel gigante */}
      <HeroCarousel />

      {/* Pronto aquí debajo irán los productos... */}
      <div className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Productos Destacados
          </h2>
          <p className="text-center text-gray-300">
              (Aquí cargaremos las botellas en el siguiente paso)
          </p>
      </div>
    </>
  );
}

export default HomePage;