import { Router } from 'express';
import { SkillController } from './controllers/crud-controller';
import { authMiddleware } from '@core/middleware/auth-middleware';

const router = Router();
const skillController = new SkillController();

router.use(authMiddleware);

router.post('/', skillController.createSkill);
router.get('/', skillController.getAllSkills);
router.get('/:id', skillController.getSkillById);
router.put('/:id', skillController.updateSkill);
router.delete('/:id', skillController.deleteSkill);

export default router;