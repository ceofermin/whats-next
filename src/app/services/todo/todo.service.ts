import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { Task } from '../../Task'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasks: Task[] = [
    {
      priority: 0,
      text: "List out my tasks for the day",
      isDone: false
    },
  ];

  getTodoItems(): Observable<Task[]> {
    let tasks = of(this.tasks);
    return tasks;
  }

  addTodoItem(task: Task): void {
    this.tasks.push(task);
  }

  constructor() {}
}
