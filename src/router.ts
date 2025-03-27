
import { Router } from 'express';
import authRoutes from './modules/auth/routes';
import userRoutes from './modules/user/routes';
import skillRoutes from './modules/skills/routes';
import projectRoutes from './modules/project/router';
import experienceRoutes from './modules/experiencia/routes';
import educationRoutes from './modules/education/router';


const router = Router();


// Definir las rutas de los módulos
router.use('/user', authRoutes);
router.use('/user', userRoutes);
router.use('/skill', skillRoutes);
router.use('/project', projectRoutes);
router.use('/experience', experienceRoutes);
router.use('/education', educationRoutes);

// Importar las rutas de los módulos

export default router;