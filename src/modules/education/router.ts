import { Router } from 'express';
import { EducationController } from './controllers/crud-controller';
import { authMiddleware } from '@core/middleware/auth-middleware';

const router = Router();
const educationController = new EducationController();

router.use(authMiddleware);

router.post('/', educationController.createEducation);
router.get('/', educationController.getAllEducation);
router.get('/:id', educationController.getEducationById);
router.put('/:id', educationController.updateEducation);
router.delete('/:id', educationController.deleteEducation);

export default router;