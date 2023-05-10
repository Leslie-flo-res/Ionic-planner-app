import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToDoPageRoutingModule } from './to-do-routing.module';

import { ToDoPage } from './to-do.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDoPageRoutingModule,
    NgFor,
 
    
    
  ],
  declarations: [ToDoPage]
})
export class ToDoPageModule {}
