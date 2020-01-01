import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ToDoInteractionService } from 'src/app/shared/services/to-do-interaction.service';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.scss']
})
export class AddTitleComponent implements OnInit {
  coffee = faPlusCircle;
  @ViewChild('title', {static: false}) titleInput: ElementRef;

  constructor(private toDoService: ToDoInteractionService) { }

  ngOnInit() {
  }

  addTitle(title) {
    this.toDoService.setToDoTitle(title);
    this.titleInput.nativeElement.value = '';
  }

}
