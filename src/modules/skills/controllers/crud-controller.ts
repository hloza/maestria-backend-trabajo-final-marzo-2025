import { Request, Response, NextFunction } from 'express';
import { SkillService } from '../services/crud-service';
import { NotFoundError } from '@core/utils/cusstom-errors';

const skillService = new SkillService();

export class SkillController {
  public async createSkill(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const skill = await skillService.create({ ...req.body, userId });
      res.status(201).json(skill);
    } catch (error) {
      next(error);
    }
  }

  public async getSkillByUserId(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const skill = await skillService.findById(Number(req.params.id), userId);
      if (!skill) {
        throw new NotFoundError('Skill not found');
      }
      res.status(200).json(skill);
    } catch (error) {
      next(error);
    }
  }

  public async getAllSkills(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const skills = await skillService.findAll(userId);
      res.status(200).json(skills);
    } catch (error) {
      next(error);
    }
  }

  public async updateSkill(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      console.log('User ID:', userId); // Debugging line
      console.log('Request Body:', req.body); // Debugging line 
        console.log('Skill ID:', req.params.id); // Debugging line
      const skill = await skillService.update(Number(req.params.id), userId, req.body);
      if (!skill) {
        throw new NotFoundError('Skill not found');
      }
      res.status(200).json(skill);
    } catch (error) {
      next(error);
    }
  }

  public async deleteSkill(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const deleted = await skillService.delete(Number(req.params.id), userId);
      if (!deleted) {
        throw new NotFoundError('Skill not found');
      }
      res.status(204).json({ message: 'Skill deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}