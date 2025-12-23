function LoginPage() {
    return (
        <div className=" min-h-screen bg-[url('/aa.jpg')] p-40">
        <div className=" max-w-sm mx-auto bg-white bg-opacity-10 p-4  rounded shadow-md ">
            <img src="/logo1.png" alt="Logo" />
            <form className="mt-4 flex flex-col gap-3 max-w-sm mx-auto  p-3 ">
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

                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Entrar
                </button>



            </form>
        
        </div>
      </div>  

    );
}
export default LoginPage;

