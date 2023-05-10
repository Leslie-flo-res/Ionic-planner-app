import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoPage } from './to-do.page';
import { NgFor } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: ToDoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),NgFor],
  exports: [RouterModule],
})
export class ToDoPageRoutingModule {}
