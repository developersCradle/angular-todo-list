import { Component } from "@angular/core";
import { Observable, combineLatest, map } from "rxjs";
import { TodoInterface } from "../../types/todo.interface";
import { TodoService } from "../../services/todos.service";
import { FilterEnum } from "../../types/filter.enum";


@Component({
    selector: 'app-todos-main', //Prefix all our selectors! It can help identify selector from all other library selectors, if there are any.
    templateUrl: './main.component.html',
})


export class MainComponent {
    visibleTodos$ : Observable<TodoInterface[]>;



    constructor(private todoService : TodoService)
    {
        // combineLatest cobines streams, these are update to front when needed
        this.visibleTodos$ = combineLatest(
            this.todoService.todos$,
            this.todoService.filer$
        ).pipe( 
            map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
              if (filter === FilterEnum.active) {
                return todos.filter((todo) => !todo.isCompleted);
              } else if (filter === FilterEnum.completed) {
                return todos.filter((todo) => todo.isCompleted);
              }
              return todos;
            })
          );    
        }
}