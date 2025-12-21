function Menu() {
    return(

        
            
        <div>
            <h1 className="bg-blue-500 p-2 text-center">Bienvenidos al menu de Navegacion</h1>
            <ul className="py-4 flex justify-center bg-gray-900  space-x-2">
                {/* 1. El UL tendrá un fondo oscuro.
                  2. Los LI tendrán las clases de estilo individual.
                */}
                
                {/* INICIO - Color Azul */}
                <li className=" bg-gray-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded transition duration-200 cursor-pointer">
                    <a className= "" href="">Inicio</a>
                </li>
                
                {/* PRODUCTOS - Color Verde */}
                <li className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-200 cursor-pointer">
                    <a href="">Productos</a>
                </li>
                
                {/* ACERCA DE - Color Morado */}
                <li className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition duration-200 cursor-pointer">
                    <a href="">Acerca de</a>
                </li>
                
                {/* CONTACTO - Color Naranja */}
                <li className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded transition duration-200 cursor-pointer">
                    <a href="">Contacto</a>
                </li>
            </ul>
        </div>
        
    )
}
export default Menu;