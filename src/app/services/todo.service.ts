import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class TodoService{
  toDoOne: string = "Projet 1";
  toDoTwo: string = "Projet 2";
  toDoThree: string = "Projet 3";
  toDoFour: string = "Projet 4";
  today: Date = new Date();

  todos = [
    {
      name: "Projet 1",
      status: true,
      image: "http://placehold.it/150",
      toModif: false
    },
    {
      name: "Projet 2",
      status: false,
      image: "http://placehold.it/150",
      toModif: false
    },
    {
      name: "Projet 3",
      status: true,
      image: "http://placehold.it/150",
      toModif: false
    },
    {
      name: "Projet 4",
      status: true,
      image: "http://placehold.it/150",
      toModif: false
    },
    {
      name: "Projet 5",
      status: false,
      image: "http://placehold.it/150",
      toModif: false
    },

  ]

  constructor(private router: Router){}

  onChangeStatus(i: number){
    this.todos[i].status = !this.todos[i].status;
  }

  onChangeModif(i: number){
    this.todos[i].toModif = !this.todos[i].toModif;
  }

  getTodo(index: number){
    if(this.todos[index]){
      return this.todos[index];
    }
    return false;
  }

  onView(id: number){
    this.router.navigate(['single-todo',id]);
  }
}
