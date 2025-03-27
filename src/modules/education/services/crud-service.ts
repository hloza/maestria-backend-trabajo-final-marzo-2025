import { Education } from '@core/models/index';
import { IEducation } from '@core/interfaces/interfaces';

export class EducationService {
  public async create(educationData: IEducation): Promise<Education> {
    return await Education.create(educationData);
  }

  public async findAll(userId: number): Promise<Education[]> {
    return await Education.findAll({ where: { userId } });
  }

  public async findById( userId: number): Promise<Education[] | null> {
    return await Education.findAll({ where: { userId } });
  }

  public async update(id: number, educationData: Partial<IEducation>): Promise<Education | null> {
    const education = await Education.findOne({ where: { id } });
    if (!education) return null;
    
    return await education.update(educationData);
  }

  public async delete(id: number, userId: number): Promise<boolean> {
    const deleted = await Education.destroy({ where: { id, userId } });
    return deleted > 0;
  }
}