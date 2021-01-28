import { ITodoRespository } from "../interfaces/ITodoRepository";
import { Todo } from "../models/Todo";
import { Connection, getConnection, Repository } from 'typeorm';
import Database from "../db";

export class TodoRepository implements ITodoRespository {

    private context: Database;

    constructor() {
        this.setContext = this.setContext.bind(this);
    }
    
    public setContext(database) {
        this.context = database;
    }

    public async getTodos(): Promise<Todo[]> {
        const todos = await this.context.getConnection().getRepository(Todo).find();
        
        return todos;
    }

    public async getTodo(id: number) {
        const todo = await this.context.getConnection().getRepository(Todo).findOne(id);
        
        return todo;
    }

    public async updateTodo(id: number, newTodo) {
        const todo = await this.getTodo(id);
        this.context.getConnection().getRepository(Todo).merge(todo, newTodo);
        const result = this.context.getConnection().getRepository(Todo).save(todo);

        return result;
    }

    public async addTodo(todo): Promise<Todo[]> {
        const newTodo = await this.context.getConnection().getRepository(Todo).create(todo);
        const result = await this.context.getConnection().getRepository(Todo).save(newTodo);
        
        return result;
    }

    public async deleteTodo(id: number): Promise<Boolean> {
        const result = await this.context.getConnection().getRepository(Todo).delete(id);

        return result ? true : false;
    }
}