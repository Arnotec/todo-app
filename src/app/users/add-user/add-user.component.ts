import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm(){
    this.userForm = this.formBuilder.group({
      firstName: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      lastName: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control("", [Validators.required, Validators.email, Validators.minLength(5)]),
      description: this.formBuilder.control("", [Validators.required, Validators.minLength(15)]),
      dateBirth: this.formBuilder.control("", Validators.required),
      address: this.formBuilder.group({
        street: this.formBuilder.control("", Validators.required),
        state: this.formBuilder.control("", Validators.required),
        zip: this.formBuilder.control("", Validators.required),
        city: this.formBuilder.control("", Validators.required)
      })
    });
  }

  onSubmit(): void {
    const dataUser = this.userForm.value;
    const address = new Address(dataUser.street, dataUser.city, dataUser.state, dataUser.zip);
    const newUser = new User(dataUser.firstName,
                          dataUser.lastName,
                          dataUser.email,
                          address,
                          dataUser.description,
                          dataUser.dateBirth);

    this.userService.addUser(newUser);
    this.router.navigate(["users"]);

    //console.log(this.userForm.value);
  }

}
