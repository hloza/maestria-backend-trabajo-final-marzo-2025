import { Project } from '@core/models/index';
import { IProject } from '@core/interfaces/content/project-interface';

export class ProjectService {
  public async create(projectData: IProject): Promise<Project> {
    return await Project.create(projectData);
  }

  public async findAll(userId: number): Promise<Project[]> {
    return await Project.findAll({ where: { userId } });
  }

  public async findById(id: number, userId: number): Promise<Project | null> {
    return await Project.findOne({ where: { id, userId } });
  }

  public async update(id: number, userId: number, projectData: Partial<IProject>): Promise<Project | null> {
    const project = await Project.findOne({ where: { id, userId } });
    if (!project) return null;
    
    return await project.update(projectData);
  }

  public async delete(id: number, userId: number): Promise<boolean> {
    const deleted = await Project.destroy({ where: { id, userId } });
    return deleted > 0;
  }
}