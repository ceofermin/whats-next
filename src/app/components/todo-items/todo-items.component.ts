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

  constructor(private todoService: TodoService) {}

  toggleTask(item: any): void {
    this.todoService.toggleTodoItem(item);
  }

  addTask(task: Task): void {
    this.todoService.addTodoItem(task);
  }

  getActiveTasks(): Task[] {
    return this.tasks.filter((e) => e.isDone != true);
  }

  ngOnInit(): void {
    this.todoService.getTodoItems().subscribe((tasks) => this.tasks = tasks);
  }
}
