import { Model, DataTypes } from 'sequelize';
import  sequelize  from '@core/config/bdConfig';
import { IUser } from '@core/interfaces/interfaces';
import bcrypt from 'bcrypt';

 class User extends Model<IUser> implements IUser {
  public id!: number;
  public email!: string;
  public password!: string;
  public name!: string;
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
    name: {
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
export default User;