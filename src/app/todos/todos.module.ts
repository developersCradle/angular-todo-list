
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { TodosComponent } from "src/app/todos/components/todos/todos.component";
import { TodoService } from "src/app/todos/services/todos.service";
import { MainComponent } from "src/app/todos/components/main/main.component";
import { HeaderComponent } from "src/app/todos/components/header/header.coponent";


const routes : Routes = [
    {
        path : '',
        component: TodosComponent,
    },
];

// What we need in our module, is defined here
@NgModule({
    declarations: [TodosComponent, HeaderComponent, MainComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],    
    providers: [TodoService],
})

export class TodosModule { };
// Angular codestyle is name entities with postfix
// Here, module is our  Entity and Todo is the name