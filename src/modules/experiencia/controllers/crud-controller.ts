import { Request, Response, NextFunction } from 'express';
import { ExperienceService } from '../services/crud-service';
import { NotFoundError } from '@core/utils/cusstom-errors';

const experienceService = new ExperienceService();

export class ExperienceController {
  public async createExperience(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const experience = await experienceService.create({ ...req.body, userId });
      res.status(201).json(experience);
    } catch (error) {
      next(error);
    }
  }

  public async getExperienceById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const experience = await experienceService.findById(Number(req.params.id), userId);
      if (!experience) {
        throw new NotFoundError('Experience not found');
      }
      res.status(200).json(experience);
    } catch (error) {
      next(error);
    }
  }

  public async getAllExperiences(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const experiences = await experienceService.findAll(userId);
      res.status(200).json(experiences);
    } catch (error) {
      next(error);
    }
  }

  public async updateExperience(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const experience = await experienceService.update(Number(req.params.id), userId, req.body);
      if (!experience) {
        throw new NotFoundError('Experience not found');
      }
      res.status(200).json(experience);
    } catch (error) {
      next(error);
    }
  }

  public async deleteExperience(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const deleted = await experienceService.delete(Number(req.params.id), userId);
      if (!deleted) {
        throw new NotFoundError('Experience not found');
      }
      res.status(204).json({ message: 'Experience deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}