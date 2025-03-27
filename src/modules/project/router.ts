import { Router } from 'express';
import { ProjectController } from './controllers/crud-controller';
import { authMiddleware } from '@core/middleware/auth-middleware';

const router = Router();
const projectController = new ProjectController();

router.use(authMiddleware);

router.post('/', projectController.createProject);
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

export default router;