import { ModificationComponent } from './modification/modification.component';
import { AjoutComponent } from './ajout/ajout.component';
import { TaskComponent } from './task/task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "tasks"},
  {path: "tasks", component: TaskComponent},
  {path: "ajout", component: AjoutComponent},
  {path: "modification/:id", component: ModificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
