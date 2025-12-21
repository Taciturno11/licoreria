// 1. Declaración de la Función (El Componente)
function HomePage() {
  
  // 2. Lo que devuelve (La parte visual)
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-blue-600">
        Página de Inicio
      </h1>
      <p>Bienvenido a la Licorería</p>
    </div>
  );
}

// 3. La Exportación (Para que otros archivos puedan usarlo)
export default HomePage;