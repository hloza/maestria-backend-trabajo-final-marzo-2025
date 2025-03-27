import sequelize from './database';
import {User} from '@core/models/models';


const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    // Definir las relaciones entre los modelos
    
    console.log('Connection has been established successfully.');

    // Sincronizar los modelos en el orden correcto
    await User.sync({ alter: true });
    await Task.sync({ alter: true }); 
    await Subtask.sync({ alter: true });

    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default syncDatabase;