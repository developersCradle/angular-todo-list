import { Component } from "@angular/core";
import { TodoService } from "../../services/todos.service";


@Component({
    selector: 'app-todos-header', //name of app - name of module - name of component
    templateUrl: './header.component.html'
})


export class HeaderComponent {
    text : string = '';

    // No need to header know about saving our todo, just call our service.
    constructor(private todoService : TodoService)
    {
        // This is for testing
        // this.todoService.todos$.subscribe((todos) => {
        //     console.log('todos', todos);

        // });
    }


    changeText(event : Event) : void { // Its good to write types for writing safe code.
        const target =  event.target as HTMLInputElement;
        this.text = target.value;
    }

    addTodo() : void {
        this.todoService.addTodo(this.text);
        this.text = '';

    }

}