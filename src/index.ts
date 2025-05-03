
import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 3000; // Define port here

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
  