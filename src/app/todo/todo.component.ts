import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit, OnDestroy {

  today: Date = new Date();
  todos: any;
  todoSub: Subscription = new Subscription();

  constructor(private todoService: TodoService) {

  }
  ngOnInit(): void {
    this.today = this.todoService.today;
    this.todoService.todoSubject.subscribe(
      (value: any[]) => {
        this.todos = value;
      },
      (error) => {
        console.log("Erreur : "+error);
      },
      () => {
        console.log("Observable complete");
      }
    );
    this.todoService.emitTodos();

  }

  onChangeStatus(i: number){
    this.todoService.onChangeStatus(i);
  }

  onChangeModif(i: number){
   this.todoService.onChangeModif(i);
  }

  onView(id: number){
    this.todoService.onView(id);
  }
  ngOnDestroy(){
    this.todoSub.unsubscribe();
  }
}

