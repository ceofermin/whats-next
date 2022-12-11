import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  todo: string = "";

  constructor() {}

  addTodo() {
    if (!this.todo) return
    const newTask: Task = {
      priority: 0,
      text: this.todo,
      isDone: false
    };
    this.onAddTask.emit(newTask);
    this.todo = "";
  }
}
