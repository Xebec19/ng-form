import { Component,OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {
  genders = [
    "male",
    "female"
  ]
  myform: FormGroup;
  OnSubmit() {
    console.log(this.myform.value);
  }
  ngOnInit(): void {
    this.myform = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,  Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male')
      })
    });
  }
}
