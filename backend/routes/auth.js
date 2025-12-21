import express from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();
const prisma = new PrismaClient();

//--------------------RUTAS DE AUTENTICACIÓN (AUTH)------------------------------------------------//
//---Endpoint de REGISTRO---
router.post('/register', async (req, res) => {
    const {email, password, name, birthDate} = req.body;
    try {
        //Verificamos si el email ya existe
        const existingUser = await prisma.user.findUnique({
            where: { email: email },
        });
        if (existingUser) {
            return res.status(400).json({ message: 'El email ya está en uso' });
        }

        //Hasheamos la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);
        //Creamos el nuevo usuario en la base de datos
        const newUser = await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword,
                name: name,
                birthDate: new Date(birthDate),
            },
        });
        const { password: _, ...userWithoutPassword } = newUser;
        res.status(201).json(userWithoutPassword);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar el usuario' });
    }

});

//---Endpoint de LOGIN---
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        //Buscamos el usuario por su email
        const user = await prisma.user.findUnique({
            where: {email: email },
        });

        if (!user) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }
        //Comparamos la contraseña enviada con el hash de la BD
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }
        //creamos el payload para el token
        const payload = {
            userId: user.id,
            email: user.email,
            role: user.role,
        };
        //Firmamos el token JWT
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        //Enviamos el token al cliente
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }

});

export default router;