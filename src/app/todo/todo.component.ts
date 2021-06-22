import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  today: Date = new Date();
  todos: any;

  constructor(private todoService: TodoService) {

  }
  ngOnInit(): void {
    this.today = this.todoService.today;
    this.todos = this.todoService.todos;
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
}

