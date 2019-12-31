import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ToDoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ToDoComponent]
})
export class ToDoModule { }
