import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDo } from 'src/app/core/data/models/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoInteractionService {
  private toDoSubject = new BehaviorSubject<ToDo>(null);

  constructor() { }

  getToDo() {
    return this.toDoSubject.asObservable();
  }

  setToDoTitle(title: string) {
    const toDo = new ToDo(title);
    this.toDoSubject.next(toDo);
  }
}
