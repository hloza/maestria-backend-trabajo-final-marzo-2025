import { Skill } from '@core/models/index';
import { ISkill } from '@core/interfaces/interfaces';

export class SkillService {
  public async create(skillData: ISkill): Promise<Skill> {
    return await Skill.create(skillData);
  }

  public async findAll(userId: number): Promise<Skill[]> {
    return await Skill.findAll({ where: { userId } });
  }

  public async findById(id: number, userId: number): Promise<Skill | null> {
    return await Skill.findOne({ where: { id, userId } });
  }

  public async update(id: number, userId: number, skillData: Partial<ISkill>): Promise<Skill | null> {
    const skill = await Skill.findOne({ where: { id, userId } });
    if (!skill) return null;
    
    return await skill.update(skillData);
  }

  public async delete(id: number, userId: number): Promise<boolean> {
    const deleted = await Skill.destroy({ where: { id, userId } });
    return deleted > 0;
  }
}