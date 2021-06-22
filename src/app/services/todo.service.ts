import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class TodoService{
  toDoOne: string = "Projet 1";
  toDoTwo: string = "Projet 2";
  toDoThree: string = "Projet 3";
  toDoFour: string = "Projet 4";
  today: Date = new Date();
  todos: any;

  constructor(private router: Router) {

    this.todos = new Promise((resolve, reject) => {
      const data = [
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

      ];
      if (data.length) {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      } else {
        reject("Pas de donnees disponibles sur le serveur");
      }
    });
    // setTimeout(() => {
    //   this.todos = [
    //         {
    //           name: "Projet 1",
    //           status: true,
    //           image: "http://placehold.it/150",
    //           toModif: false
    //         },
    //         {
    //           name: "Projet 2",
    //           status: false,
    //           image: "http://placehold.it/150",
    //           toModif: false
    //         },
    //         {
    //           name: "Projet 3",
    //           status: true,
    //           image: "http://placehold.it/150",
    //           toModif: false
    //         },
    //         {
    //           name: "Projet 4",
    //           status: true,
    //           image: "http://placehold.it/150",
    //           toModif: false
    //         },
    //         {
    //           name: "Projet 5",
    //           status: false,
    //           image: "http://placehold.it/150",
    //           toModif: false
    //         },

    //   ];
    //   console.log("Dans timeout", this.todos);
    // }, 1000);
  }

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
