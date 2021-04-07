import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {

  @ViewChild('f') signupForm: NgForm;

  suggestUserName(){
    const suggestedName = 'Superuser';
  }
  defaultQuestion = "teacher";

  onSubmit(f:NgForm){
    console.log('###The form values are ### ',this.signupForm);
  }
  constructor() { }

}
