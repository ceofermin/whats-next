import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs'
import { CookieService } from 'ngx-cookie-service';

import { Task } from '../../Task'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  id: string = "wn-ti:"
  tasks: Task[] = [];

  constructor(private cookie: CookieService) {}

  generateTodoId(): number {
    return Math.floor(Math.random() * 1000);
  }

  getTodoItems(): Observable<Task[]> {
    return of([{
      id: this.generateTodoId(),
      priority: 0,
      text: "Fill out my tasks for today",
      isDone: false
    }]);
  }

  removeTodoItem(item: Task): void {}

  addTodoItem(task: Task): void {
    this.tasks.unshift(task);
  }

  toggleTodoItem(item: Task): void {
    item.isDone = !item.isDone;
  }
}
