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
      text: "Water the ficus trees in the backyard",
      isDone: false
    },
    {
      priority: 0,
      text: "Reroute the cables in the master bedroom",
      isDone: false
    },
    {
      priority: 1,
      text: "Tell the children that I love them",
      isDone: false
    }
  ];

  getTodoItems(): Observable<Task[]> {
    let tasks = of(this.tasks);
    return tasks;
  }

  constructor() {}
}
