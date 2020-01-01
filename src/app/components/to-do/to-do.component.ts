import { Component, OnInit } from '@angular/core';
import { ToDoInteractionService } from 'src/app/shared/services/to-do-interaction.service';
import { faCircle, faCheckCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  toDoList = [];
  circle = faCircle;
  checkCircle = faCheckCircle;
  trash = faTrashAlt;
  checked = false;

  constructor(private toDoService: ToDoInteractionService) { }

  ngOnInit() {
    this.toDoService.getToDo().subscribe(toDos => {
      if(toDos){
        this.toDoList.push(toDos.title);
      }
    });
  }

  checkItem(e){
    this.checked = !this.checked;
    console.log(e);
  }

}
