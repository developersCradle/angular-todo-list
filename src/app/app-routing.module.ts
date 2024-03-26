import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
// We want isolate this to each module

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Here Global routes in angular
  exports: [RouterModule]
})
export class AppRoutingModule { }
