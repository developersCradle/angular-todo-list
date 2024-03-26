import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TodoInterface } from "../types/todo.interface";

@Injectable()


export class TodoService {
//  recommended to observables or behavior subjects

todos$ = new BehaviorSubject<TodoInterface[]>([]); //Behavior Subjects, we can change it and subscribe to it like observable
// Define types whenever possible


addTodo(text : string) : void
{
    const newTodo : TodoInterface = {
        id: Math.random().toString(16), //For now, id is made in front-end
        text,
        isCompleted: false
    };

    //Merging with todos
    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);
}

}