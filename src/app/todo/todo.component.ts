import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent{
  toDoOne: string = "Projet 1";
  toDoTwo: string = "Projet 2";
  toDoThree: string = "Projet 3";
  toDoFour: string = "Projet 4";

  todos = [
    {
      name: "Projet 1",
      status: true,
      image: "http://placehold.it/100",
      toModif: false
    },
    {
      name: "Projet 2",
      status: false,
      image: "http://placehold.it/100",
      toModif: false
    },
    {
      name: "Projet 3",
      status: true,
      image: "http://placehold.it/100",
      toModif: false
    },
    {
      name: "Projet 4",
      status: true,
      image: "http://placehold.it/100",
      toModif: false
    },
    {
      name: "Projet 5",
      status: false,
      image: "http://placehold.it/100",
      toModif: false
    },

  ]

  onChangeStatus(i: number){
    this.todos[i].status = !this.todos[i].status;
  }

  onChangeModif(i: number){
    this.todos[i].toModif = !this.todos[i].toModif;
  }

}

