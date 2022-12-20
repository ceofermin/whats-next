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

  toggleTask(task: Task): void {
    task.isDone = !task.isDone;
    if (task.isDone) {
      this.todoService.removeTask(task).subscribe(
        (task) => this.tasks = this.tasks.filter((t) => t.id !== task.id)
      );
    }
  }

  addTask(task: Task): void {
    this.todoService.addTask(task).subscribe((task) => this.tasks.unshift(task));
  }

  getActiveTasks(): Task[] {
    return this.tasks.filter((e) => e.isDone != true);
  }

  ngOnInit(): void {
    this.todoService.tasks.subscribe((tasks) => this.tasks = tasks);
  }
}
