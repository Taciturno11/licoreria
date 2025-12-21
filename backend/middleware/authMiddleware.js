import jwt from 'jsonwebtoken';

//Esta Funcion será nuestro guardian para las rutas que necesiten autenticación
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    //El formato es beaerer TOKEN_LARGO 
    const token = authHeader && authHeader.split(' ')[1];
    //Si no hay token, no está autorizado
    if (token == null) {
        return res.status(401).json({ message: 'Token requerido' });
    }

    //Verificamos el token
    jwt.verify (token, process.env.JWT_SECRET, (err, userPayload) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }


        req.user = userPayload;
        next();
    });
};
export default authenticateToken;