import { Request, Response, NextFunction } from 'express';
import { validateAuthToken } from '../utils/sessionUtils';

// Definición de la interfaz AuthRequest
export interface AuthRequest extends Request {
  user?: {
    userId: number;
    email: string;
  }
}

// Definición del middleware de autenticación
export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.header('Authorization');
    
    if (!authHeader) {
      res.status(401).json({ message: 'No token provided' });
      return;
    }

    const token = authHeader.replace('Bearer ', '');
    const decoded = validateAuthToken(token);
    
    if (!decoded) {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }

    // Asignar el usuario decodificado a la request
    (req as AuthRequest).user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ 
      message: 'Authentication failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};