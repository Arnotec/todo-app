import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm(){
    this.userForm = this.formBuilder.group({
      firstName: this.formBuilder.control(""),
      lastName: this.formBuilder.control(""),
      email: this.formBuilder.control(""),
      description: this.formBuilder.control(""),
      dateBirth: this.formBuilder.control(""),
      address: this.formBuilder.group({
        street: this.formBuilder.control(""),
        state: this.formBuilder.control(""),
        zip: this.formBuilder.control(""),
        city: this.formBuilder.control("")
      })
    });
  }

  onSubmit(): void {
    console.log(this.userForm.value);

  }

}
