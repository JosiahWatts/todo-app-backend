import { TodoRepository } from '../repositories/TodoRepository';

class TodoController {

    public static index(req, res) {
        res.json({
            message: 'You will find todos at some point'
        });
    }

    public static show(req, res) {
        res.json({
            message: `Showing todo ${req.params.id}`
        });
    }

    public static create(req, res) {
        console.log('Im gonna create the todo');
    }
    
    public static edit(req, res) {
        res.json({
            message: `Edits for todo ${req.params.id}`
        });

    }
    
    public static destroy(req, res) {
        console.log('I\'m going to destroy!');
    }
}

export default TodoController;