import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs'
import { CookieService } from 'ngx-cookie-service';

import { Task } from '../../Task'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private cId = "wn::";

  constructor(private cookies: CookieService) {}

  generateTodoId(): number {
    return Math.floor(Math.random() * (9999 - 1000) + 1000);
  }

  get storedTasks(): Task[] {
    if (!this.cookies.check(this.cId)) return [];
    try {
      return JSON.parse(this.cookies.get(this.cId));
    } catch (err) {
      console.warn("Issue with collecting stored cookies:", this.cookies.get(this.cId).split(","));
      return [];
    }
  }

  set storedTasks(tasks: Task[]) {
    this.cookies.set(this.cId, JSON.stringify(tasks));
  }

  get tasks(): Observable<Task[]> {
    // console.table(this.storedTasks);
    try {
      return of(this.storedTasks);
    } catch (err) {
      return of([]);
    }
  }

  addTask(task: Task): Observable<Task> {
    this.storedTasks = [task].concat(this.storedTasks);
    return of(task);
  }

  removeTask(task: Task): Observable<Task> {
    this.storedTasks = this.storedTasks.filter((e) => e.id !== task.id);
    return of(task);
  }
}
