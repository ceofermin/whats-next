import { Injectable } from '@angular/core';
import { Observable, of, from, tap, filter, map, pluck } from 'rxjs'
import { CookieService } from 'ngx-cookie-service';

import { Task } from '../../Task'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  id: string = "wn-ti:"
  tasks: Task[] = [];

  constructor(private cookie: CookieService) {}

  setTaskCookie(task: Task): void {
    this.cookie.set(`${this.id}${task.id}`, JSON.stringify(task));
  }

  getTasksFromCookies(): Observable<Task[]> {
    const cookieTasks = of(this.cookie.getAll())
      .pipe(
        map((c) => Object.keys(c).filter((n) => n.includes(this.id)).map((e) => JSON.parse(c[e])))
      );
    return cookieTasks;
  }

  generateTodoId(): number {
    return Math.floor(Math.random() * 1000);
  }

  getTodoItems(): Observable<Task[]> {
    this.getTasksFromCookies().subscribe((tasks) => this.tasks = tasks);
    let tasks = of(this.tasks);
    return tasks;
  }

  toggleTodoItem(item: Task): void {
    item.isDone = !item.isDone;
    if (item.isDone) {
      this.cookie.delete(`${this.id}${item.id}`);
    } else {
      this.setTaskCookie(item);
    }
  }

  addTodoItem(task: Task): void {
    this.setTaskCookie(task);
    this.tasks.unshift(task);
  }
}
