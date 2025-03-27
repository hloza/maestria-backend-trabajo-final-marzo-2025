import { Model, DataTypes } from 'sequelize';
import sequelize from '@core/config/bdConfig';
import { IProject } from '@core/interfaces/content/project-interface';

class Project extends Model<IProject> implements IProject {
  public id!: number;
  public userId!: number;
  public title!: string;
  public description!: string;
  public period!: string;
}

Project.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'userId',
    references: {
      model: 'users',
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  period: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Project',
  tableName: 'projects'
});

export default Project;