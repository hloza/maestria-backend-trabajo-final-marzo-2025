import { Request, Response, NextFunction } from 'express';
import { EducationService } from '../services/crud-service';
import { NotFoundError } from '@core/utils/cusstom-errors';

const educationService = new EducationService();

export class EducationController {
  public async createEducation(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const education = await educationService.create({ ...req.body, userId });
      res.status(201).json(education);
    } catch (error) {
      next(error);
    }
  }

  public async getEducationById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const education = await educationService.findById( userId);
      if (!education) {
        throw new NotFoundError('Education record not found');
      }
      res.status(200).json(education);
    } catch (error) {
      next(error);
    }
  }

  public async getAllEducation(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const education = await educationService.findAll(userId);
      res.status(200).json(education);
    } catch (error) {
      next(error);
    }
  }

  public async updateEducation(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const education = await educationService.update(Number(req.params.id), req.body);
      if (!education) {
        throw new NotFoundError('Education record not found');
      }
      res.status(200).json(education);
    } catch (error) {
      next(error);
    }
  }

  public async deleteEducation(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const deleted = await educationService.delete(Number(req.params.id), userId);
      if (!deleted) {
        throw new NotFoundError('Education record not found');
      }
      res.status(204).json({ message: 'Education record deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}