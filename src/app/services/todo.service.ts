import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable()
export class TodoService{
  toDoOne: string = "Projet 1";
  toDoTwo: string = "Projet 2";
  toDoThree: string = "Projet 3";
  toDoFour: string = "Projet 4";
  today: Date = new Date();
  todos: any;
  todoSubject = new Subject<any[]>();

  constructor(private router: Router) {

    setTimeout(() => {
      this.todos = [
            {
              name: "Projet 1",
              status: true,
              image: "https://picsum.photos/150",
              toModif: false,
              description: "Film de science fiction mettant en scène des alienes venues d'autres planetes"
            },
            {
              name: "Projet 2",
              status: false,
              image: "https://picsum.photos/150",
              toModif: false,
              description: "Film de science fiction mettant en scène des alienes venues d'autres planetes"
            },
            {
              name: "Projet 3",
              status: true,
              image: "https://picsum.photos/150",
              toModif: false,
              description: "Film de science fiction mettant en scène des alienes venues d'autres planetes"
            },
            {
              name: "Projet 4",
              status: true,
              image: "https://picsum.photos/150",
              toModif: false,
              description: "Film de science fiction mettant en scène des alienes venues d'autres planetes"
            },
            {
              name: "Projet 5",
              status: false,
              image: "https://picsum.photos/150",
              toModif: false,
              description: "Film de science fiction mettant en scène des alienes venues d'autres planetes"
            },

      ];
      this.emitTodos();
      console.log("Dans timeout", this.todos);
    }, 1000);
  }

  emitTodos(){
    this.todoSubject.next(this.todos);
  }

  onChangeStatus(i: number){
    this.todos[i].status = !this.todos[i].status;
    this.emitTodos();
  }

  onChangeModif(i: number){
    this.todos[i].toModif = !this.todos[i].toModif;
    this.emitTodos();
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
