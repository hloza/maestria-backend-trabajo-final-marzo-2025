import { Router } from 'express';
import { UserController } from './controllers/crud-controller';
import { authMiddleware } from '@core/middleware/auth-middleware';



const router = Router();
const userController = new UserController();

// Public routes
router.post('/register', userController.createUser);

// Protected routes
router.get('/profile', authMiddleware, userController.getUserById);
router.put('/profile', authMiddleware, userController.updateUser);

export default router;