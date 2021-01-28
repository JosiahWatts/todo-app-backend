import * as express from 'express';
import TodoController from './controllers/todo-controller';
import Database from './db';

const app = express();
const port: number = 4600;

Database.createConnection();

app.get('/todos', TodoController.index);
app.get('/todos/:id', TodoController.show);
app.post('/todos/:id/edit', TodoController.edit);

app.listen(port, () => {
    console.log(`Howdy, check out: http://localhost:${port}`);
});