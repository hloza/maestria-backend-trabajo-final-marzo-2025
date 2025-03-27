import { Model, DataTypes } from 'sequelize';
import sequelize from '@core/config/bdConfig';
import { ISkill } from '@core/interfaces/interfaces';

class Skill extends Model<ISkill> implements ISkill {
  public id!: number;
  public userId!: number;
  public description!: string;
}

Skill.init({
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
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Skill',
  tableName: 'skills'
});

export default Skill;