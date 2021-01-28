import { Request, Response } from 'express';
import { ITodoRespository } from '../interfaces/ITodoRepository';
import { BaseController } from './BaseController';
import { Todo } from '../viewmodels/Todo';

class TodoController extends BaseController {

    private _todoRepository: ITodoRespository;

    constructor(_todoRepository: ITodoRespository) {
        super();
        this._todoRepository = _todoRepository;
    }

    public async index(req: Request, res: Response) {
        const todos = await this._todoRepository.getTodos();

        res.json({ todos });
    }

    public async show(req: Request, res: Response) {
        const todoId = parseInt(req.params.id);
        const todo = await this._todoRepository.getTodo(todoId);
        
        res.json({ todo });
    }

    public async create(req: Request, res: Response) {
        let newTodo: Todo = {
            title: req.body.title,
            description: req.body.description,
            isCompleted: req.body.isCompleted,
        }

        const todo = await this._todoRepository.addTodo(newTodo);
        res.json({ todo });
    }
    
    public async edit(req: Request, res: Response) {
        const todoId = parseInt(req.params.id);

        let newTodo: Todo = {
            title: req.body.title,
            description: req.body.description,
            isCompleted: req.body.isCompleted,
        }

        const todo = await this._todoRepository.updateTodo(todoId, newTodo);

        res.json({ todo })
    }
    
    public async destroy(req: Request, res) {
        const todoId = parseInt(req.params.id);
        const deletion = await this._todoRepository.deleteTodo(todoId);

        res.json({ deletion });
    }
}

export default TodoController;