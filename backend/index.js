import express from 'express';
import cors from 'cors';
//Importamos los "Departamentos" (Routes) que creamos
import authRouter from './routes/auth.js';
import productsRouter from './routes/products.js';


// configuracion inicial
const app = express();
const PORT = process.env.PORT;
//middleware para parsear JSON
app.use(cors());
app.use(express.json());

//Usamos las rutas importadas
app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);

app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de la tienda en línea!');
});


//Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});