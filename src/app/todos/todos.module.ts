
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodosComponent } from "src/app/todos/components/todos/todos.component";


const routes : Routes = [
    {
        path : '',
        component: TodosComponent,
    },
];

// What we need in our module, is defined here
@NgModule({
    declarations: [TodosComponent],
    imports: [RouterModule.forChild(routes)],    
})

export class TodosModule { };
// Angular codestyle is name entities with postfix
// Here, module is our  Entity and Todo is the name