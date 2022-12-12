import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service'
import { Task } from '../../Task'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  todo: string = "";

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (!this.todo) return
    const newTask: Task = {
      id: this.todoService.generateTodoId(),
      priority: 0,
      text: this.todo,
      isDone: false
    };
    this.onAddTask.emit(newTask);
    this.todo = "";
  }
}
