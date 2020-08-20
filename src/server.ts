import 'reflect-metadata';
import express from 'express';
import './database/connect';
import routes from './routes';
import cors from 'cors';

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(
  `🦄🍄 Ready for magia at port ${port}. Waiting database...`
));