import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './src/router';
import  syncDatabase from './src/core/config/config';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);
const port = process.env.PORT;

syncDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});


export default app;