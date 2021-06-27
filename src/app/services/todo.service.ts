import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { Todo } from "../models/todo.model";

@Injectable()
export class TodoService{
  toDoOne: string = "Projet 1";
  toDoTwo: string = "Projet 2";
  toDoThree: string = "Projet 3";
  toDoFour: string = "Projet 4";
  today: Date = new Date();
  todos: Todo[] = [];
  todoSubject = new Subject<any[]>();

  constructor(private router: Router, private httpClient: HttpClient) {
    this.getTodoFromServer();
  }

  emitTodos() {
    this.todoSubject.next(this.todos);
  }

  onChangeStatus(i: number){
    this.todos[i].status = !this.todos[i].status;
    this.emitTodos();
    this.saveTodoFromServer();
  }

  onChangeModif(i: number){
    this.todos[i].toModif = !this.todos[i].toModif;
    this.emitTodos();
    this.saveTodoFromServer();
  }

  getTodo(index: number) {
    if(this.todos[index]) {
      return this.todos[index];
    }
    return false;
  }

  onView(id: number) {
    this.router.navigate(['single-todo',id]);
  }

  addTodo(todo: Todo): void {
    this.todos.unshift(todo);
    this.emitTodos();
    this.saveTodoFromServer();
  }

  saveTodoFromServer(): void {
    this.httpClient.put("https://todo-list-app-8030c-default-rtdb.firebaseio.com/todos.json", this.todos)
    .subscribe(
      () => {
        console.log("Donnees enregistrees avec succes !");
      },
      (error) => {
        console.log("Erreur de sauvegarde : "+error);

      }
    );
  }

  getTodoFromServer(): void {
    this.httpClient.get<Todo[]>("https://todo-list-app-8030c-default-rtdb.firebaseio.com/todos.json")
    .subscribe(
      (todosRecup: Todo[]) => {
        this.todos = todosRecup;
        this.emitTodos();
      },
      (error) => {
        console.log("Erreur de recuperation des donnees : "+error);
      },
      () => {
        console.log("Recuperation des donnees terminees");
      }
    );
  }
}
