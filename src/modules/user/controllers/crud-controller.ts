import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/crud-service';
import { NotFoundError } from '@core/utils/cusstom-errors';

const userService = new UserService();

export class UserController {
   

  public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await userService.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  public async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const userId = (req as any).user.id;
      const user = await userService.findById(userId);
      if (!user) {
        throw new NotFoundError('User not found');
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  public async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const userId = (req as any).user.id;  
      const user = await userService.update(userId, req.body);
      if (user) {
        res.status(200).json(user);
      } else {
        throw new NotFoundError('User not found');
      }
    } catch (error) {
      next(error);
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await userService.delete(Number(req.params.id));
      if (user) {
        res.status(204).json({ message: 'User deleted successfully' });
      } else {
        throw new NotFoundError('User not found');
      }
    } catch (error) {
      next(error);
    }
  }
}