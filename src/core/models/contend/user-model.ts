import { Model, DataTypes } from 'sequelize';
import  sequelize  from '@core/config/bdConfig';
import bcrypt from 'bcrypt';

interface UserAttributes {
  id?: number;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public async validPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    paranoid: true,
    hooks: {
        beforeCreate: async (user: User) => {
          user.password = await bcrypt.hash(user.password, 10);
        },
        beforeUpdate: async (user: User) => {
          if (user.changed("password")) {
            user.password = await bcrypt.hash(user.password, 10);
          }
         
        },
      },
  }
)

export  {User, UserAttributes};