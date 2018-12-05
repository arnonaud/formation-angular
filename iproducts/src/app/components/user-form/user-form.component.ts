import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  usernameCtrl: Validators;
  birthdateCtrl: Validators;

  static isOldEnough(control: FormControl) {
    const birthDate = new Date(control.value);
    birthDate.setFullYear(birthDate.getUTCFullYear() + 18);
    return birthDate < new Date() ? null : { tooYoung: true };
  }

  constructor(fb: FormBuilder) {

    this.usernameCtrl = new FormControl('', {
      validators: Validators.required
    });

    this.birthdateCtrl = fb.control('', [
      Validators.required,
      UserFormComponent.isOldEnough
    ]);

    this.userForm = fb.group({
      username: this.usernameCtrl,
      birthdate: this.birthdateCtrl
    })

    
   }

   

  ngOnInit() {
  }

  register() {
    console.log(this.userForm.value);
  }

}
