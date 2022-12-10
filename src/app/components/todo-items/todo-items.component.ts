import { Component, OnInit } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.sass']
})
export class TodoItemsComponent implements OnInit {
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

  getTodoItems(): Task[] {
    return this.tasks;
  }

  todoItems: Task[] = this.getTodoItems();

  ngOnInit(): void {
  }
}
