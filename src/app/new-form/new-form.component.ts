import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
  genders=[
    "male",
    "female"
  ]
  myform: FormGroup;
  constructor() { }

}
