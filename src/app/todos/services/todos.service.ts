import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TodoInterface } from "../types/todo.interface";
import { FilterEnum } from "../types/filter.enum";

@Injectable()


export class TodoService {
//  recommended to observables or behavior subjects

todos$ = new BehaviorSubject<TodoInterface[]>([]); //Behavior Subjects, we can change it and subscribe to it like observable
// Define types whenever possible

filer$ = new BehaviorSubject<FilterEnum>(FilterEnum.all); //We cannot send wrong data with enum
// We are using rxStream for their userfullness

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