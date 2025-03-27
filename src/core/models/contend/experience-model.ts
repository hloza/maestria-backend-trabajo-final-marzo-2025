import { Model, DataTypes } from 'sequelize';
import sequelize from '@core/config/bdConfig';
import { IExperience } from '@core/interfaces/interfaces';

class Experience extends Model<IExperience> implements IExperience {
  public id!: number;
  public userId!: number;
  public position!: string;
  public title!: string;
  public url?: string;
  public period!: string;
}

Experience.init({
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
  position: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING
  },
  period: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Experience',
  tableName: 'experiences'
});

export default Experience;