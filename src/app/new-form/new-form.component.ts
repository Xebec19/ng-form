import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
  submitted:boolean = false;
  genders = ['male','female'];
  answer:string;
  @ViewChild('f') signupForm: NgForm;

  user = {
    username: '',
    email: '',
    secretQuestion: ''
  };
  suggestUserName(){
    const suggestedName = 'Superuser';
   /* this.signupForm.setValue({
      userData:{
        username: suggestedName,
        email:''
      },
      secret:'pet',
      gender:'male',
      answer:'dodido'
    })*/
    
    this.signupForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    })
  }
  defaultQuestion = "teacher";

  onSubmit(f:NgForm){
    console.log('###The form values are ### ',this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.username = this.signupForm.value.username;
    this.signupForm.reset();
  }
  constructor() { }

}
