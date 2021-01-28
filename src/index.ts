import * as express from 'express';
import Database from './db';
import TodoController from './controllers/TodoController';
import { TodoRepository } from './repositories/TodoRepository';

const app = express();
const port: number = 4600;

app.use(express.json());

const database = new Database();
database.createConnection();

const todoRepository = new TodoRepository();
const todoController = new TodoController(todoRepository);
const boundTodoRepo = todoRepository.setContext.bind(database);
boundTodoRepo(database);

app.get('/todos', todoController.index.bind(todoController));
app.post('/todos', todoController.create.bind(todoController));
app.get('/todos/:id', todoController.show.bind(todoController));
app.put('/todos/:id/edit', todoController.edit.bind(todoController));
app.delete('/todos/:id', todoController.destroy.bind(todoController));

// Gosh, forgot about this ^^... sigh.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

app.listen(port, () => {
    console.log(`Howdy, check out: http://localhost:${port}`);
});