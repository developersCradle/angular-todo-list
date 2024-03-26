
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodosComponent } from "src/app/todos/components/todos/todos.component";
import { HeaderComponent } from "src/app/todos/components/header/todos.component";
import { TodoService } from "./services/todos.service";


const routes : Routes = [
    {
        path : '',
        component: TodosComponent,
    },
];

// What we need in our module, is defined here
@NgModule({
    declarations: [TodosComponent, HeaderComponent],
    imports: [RouterModule.forChild(routes)],    
    providers: [TodoService],
})

export class TodosModule { };
// Angular codestyle is name entities with postfix
// Here, module is our  Entity and Todo is the name