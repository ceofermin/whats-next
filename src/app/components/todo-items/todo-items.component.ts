import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  state,
  animate,
  transition
} from '@angular/animations';

import { TodoService } from '../../services/todo/todo.service'

import { Task } from '../../Task';

const todoItemTrigger = trigger("todoItemFade", [
  transition(":enter", [
    style({
      opacity: 0,
      margin: 0,
      height: 0,
      padding: "0 15px",
      transform: "translateY(50%)"
    }),
    animate("250ms ease-out")
  ]),
  transition(":leave", [
    animate("250ms ease-out", style({
      opacity: 0,
      padding: "0 15px",
      margin: 0,
      height: 0
    }))
  ])
])

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.sass'],
  animations: [todoItemTrigger]
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
