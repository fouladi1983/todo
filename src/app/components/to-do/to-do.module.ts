import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTitleComponent } from './add-title/add-title.component';



@NgModule({
  declarations: [
    ToDoComponent,
    AddTitleComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ToDoComponent]
})
export class ToDoModule { }
