import sequelize from './bdConfig';
import {User,Skill, Project, Education, Experience} from '@models/index';


const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    // Definir las relaciones entre los modelos
    
    console.log('Connection has been established successfully.');

    // Sincronizar los modelos en el orden correcto
    await User.sync({ alter: true });
    await Skill.sync({ alter: true });
    await Project.sync({ alter: true });
    await Education.sync({ alter: true });
    await Experience.sync({ alter: true });

    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default syncDatabase;