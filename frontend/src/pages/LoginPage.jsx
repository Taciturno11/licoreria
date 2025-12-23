function LoginPage() {
    return (
        <div className="py-40 max-w-sm mx-auto ">
            <h1 className="text-4xl font-bold text-blue-600 text-center border-b-2 border-blue-600 pb-5">Login</h1>
            <form className="mt-4 flex flex-col gap-3 max-w-sm mx-auto border p-3 shadow-lg">
                <label >Usuario </label>
                <input
                 type="text" 
                 id="nombre"
                 placeholder="Ingrese su usuario" 
                 className = "border p-2 rounded"
                 />
                <label>Contraseña</label>
                <input
                type="password" 
                placeholder="Ingrese la contraseña" 
                className = "border p-2 rounded"
                />

                <button className="bg-blue-500 text-white p-2 rounded">
                    Entrar
                </button>



            </form>
        
        </div>

    );
}
export default LoginPage;

