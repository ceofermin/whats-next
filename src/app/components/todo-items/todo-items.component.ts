import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service'

import { Task } from '../../Task';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.sass']
})
export class TodoItemsComponent implements OnInit {
  tasks: Task[] = [];

  toggleTask(item: any): void {
    item.isDone = !item.isDone;
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.tasks = this.todoService.getTodoItems();
  }
}
