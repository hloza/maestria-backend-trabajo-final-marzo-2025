import { Model, DataTypes } from 'sequelize';
import sequelize from '@core/config/bdConfig';
import { IEducation } from '@core/interfaces/content/education-interface';

class Education extends Model<IEducation> implements IEducation {
  public id!: number;
  public userId!: number;
  public institution!: string;
  public title!: string;
  public finish!: boolean;
}

Education.init({
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
  institution: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  finish: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  sequelize,
  modelName: 'Education',
  tableName: 'educations'
});

export default Education;