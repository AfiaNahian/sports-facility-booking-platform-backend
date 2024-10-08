import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

//use parsers
app.use(express.json());
app.use(express.text());
app.use(cors());

//const port = 5000
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
//not found route
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});
export default app;
