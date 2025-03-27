
import { Router } from 'express';
import authRoutes from './modules/auth/routes';
import userRoutes from './modules/user/routes';



const router = Router();


// Definir las rutas de los módulos
router.use('/user', authRoutes);
router.use('/user', userRoutes);
// Importar las rutas de los módulos

export default router;