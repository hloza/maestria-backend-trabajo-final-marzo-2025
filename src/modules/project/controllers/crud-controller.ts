import { Request, Response, NextFunction } from 'express';
import { ProjectService } from '../services/crud-service';
import { NotFoundError } from '@core/utils/cusstom-errors';

const projectService = new ProjectService();

export class ProjectController {
  public async createProject(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const project = await projectService.create({ ...req.body, userId });
      res.status(201).json(project);
    } catch (error) {
      next(error);
    }
  }

  public async getProjectById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const project = await projectService.findById(Number(req.params.id), userId);
      if (!project) {
        throw new NotFoundError('Project not found');
      }
      res.status(200).json(project);
    } catch (error) {
      next(error);
    }
  }

  public async getAllProjects(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const projects = await projectService.findAll(userId);
      res.status(200).json(projects);
    } catch (error) {
      next(error);
    }
  }

  public async updateProject(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const project = await projectService.update(Number(req.params.id), userId, req.body);
      if (!project) {
        throw new NotFoundError('Project not found');
      }
      res.status(200).json(project);
    } catch (error) {
      next(error);
    }
  }

  public async deleteProject(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = (req as any).user.id;
      const deleted = await projectService.delete(Number(req.params.id), userId);
      if (!deleted) {
        throw new NotFoundError('Project not found');
      }
      res.status(204).json({ message: 'Project deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}