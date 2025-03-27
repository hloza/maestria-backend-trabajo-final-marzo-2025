import { Router } from 'express';
import { ExperienceController } from './controllers/crud-controller';
import { authMiddleware } from '@core/middleware/auth-middleware';

const router = Router();
const experienceController = new ExperienceController();

router.use(authMiddleware);

router.post('/', experienceController.createExperience);
router.get('/', experienceController.getAllExperiences);
router.get('/:id', experienceController.getExperienceById);
router.put('/:id', experienceController.updateExperience);
router.delete('/:id', experienceController.deleteExperience);

export default router;