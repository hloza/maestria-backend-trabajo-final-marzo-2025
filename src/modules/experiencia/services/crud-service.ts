import { Experience } from '@core/models/index';
import { IExperience } from '@core/interfaces/interfaces';

export class ExperienceService {
  public async create(experienceData: IExperience): Promise<Experience> {
    return await Experience.create(experienceData);
  }

  public async findAll(userId: number): Promise<Experience[]> {
    return await Experience.findAll({ where: { userId } });
  }

  public async findById( userId: number): Promise<Experience []| null> {
    return await Experience.findAll({ where: {  userId } });
  }

  public async update(id: number, userId: number, experienceData: Partial<IExperience>): Promise<Experience | null> {
    const experience = await Experience.findOne({ where: { id, userId } });
    if (!experience) return null;
    
    return await experience.update(experienceData);
  }

  public async delete(id: number, userId: number): Promise<boolean> {
    const deleted = await Experience.destroy({ where: { id, userId } });
    return deleted > 0;
  }
}