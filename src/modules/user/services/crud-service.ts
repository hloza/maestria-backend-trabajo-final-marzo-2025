import { User } from '@core/models/index';
import { IUser } from '@core/interfaces/interfaces';

export class UserService {
  async create(userData: IUser): Promise<User> {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error('Error creating user');
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      return await User.findOne({ where: { email } });
    } catch (error) {
      throw new Error('Error finding user');
    }
  }

  async findById(id: number): Promise<User | null> {
    try {
      return await User.findByPk(id);
    } catch (error) {
      throw new Error('Error finding user');
    }
  }

  async update(id: number, userData: Partial<IUser>): Promise<User | null> {
    try {
      const user = await User.findByPk(id);
      if (!user) return null;
      
      return await user.update(userData);
    } catch (error) {
      throw new Error('Error updating user');
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      const deleted = await User.destroy({ where: { id } });
      return deleted > 0;
    } catch (error) {
      throw new Error('Error deleting user');
    }
  }
}