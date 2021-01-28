import { Todo } from "../models/Todo";

export interface ITodoRespository {
    getTodos(): Promise<Todo[]>;
    getTodo(id: number): Promise<Todo>;
    updateTodo(id: number, newTodo): Promise<Todo>;
    addTodo(todo): Promise<Todo[]>;
    deleteTodo(id: number): Promise<Boolean>;
}