import express from 'express';
import { PrismaClient } from '@prisma/client';
// Imporamos nuestro guardia!
import authenticateToken from '../middleware/authMiddleware.js';

const router = express.Router();
const prisma = new PrismaClient();

//--------------------RUTAS DE PRODUCTOS------------------------------------------------//
//---GET /api/products - Obtener todos los productos (PUBLICO)---
router.get('/', async (req, res) => {
   try {
    const products = await prisma.product.findMany();
    res.json(products);
   } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos' });
   }
});

//---GET /api/products/:id - Obtener un producto por ID (PUBLICO)---
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await prisma.product.findUnique({
            where: { id: parseInt(id) },
        });
        //Si el producto no existe, devolvemos un error 404
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado'});
        }
        //Si existe, lo devolvemos
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el producto' });
    }     
});


// --- Rutas de Productos que requieren autenticación --- //
// A partir de aquí, todas las rutas necesitarán un token válido, 'authenticateToken' es nuestro guardia
//---POST /api/products - Crear un nuevo producto (PRIVADO)---
router.post('/', authenticateToken, async (req, res) => {
    const { name, description, price, imageUrl, stock, category } = req.body;
    try {
        const newProduct = await prisma.product.create({
            data: { name, description, price, imageUrl, stock, category },
    });
    res.status(201).json(newProduct);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el producto' });
}
});
//---PUT /api/products/:id - Actualizar un producto por ID (PRIVADO)---
router.put('/:id', authenticateToken, async (req, res) => {
    const {id} = req.params;
    const { name, description, price, imageUrl, stock, category } = req.body;
    try {
        const updatedProduct = await prisma.product.update({
            where: { id: parseInt(id) },
            data: { name, description, price, imageUrl, stock, category },
        });
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el producto' });
    }   
});

//---DELETE /api/products/:id - Eliminar un producto por ID (PRIVADO)---
router.delete('/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.product.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el producto' });
    }
});

export default router;