import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.scss']
})
export class AddTitleComponent implements OnInit {
  coffee = faPlusCircle;

  constructor() { }

  ngOnInit() {
  }

  addTitle() {
    console.log("hello")
  }

}
