import { Component } from '@angular/core';
import { ITask } from './task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Taskly';
  emptyTodoList: string = 'Add a todo'
  uncompletedTodos: string = 'Your completed tasks wil appear here'
  todoList: ITask[] = []
  completedTodos:ITask[]=[]

  addTodo(text: string) {
    const todo = { text, status: "pending", id: Date.now() }
    this.todoList.push(todo)
  }
  checkTodo(id) {
    const todoItem = this.todoList.filter(todo => todo.id === +id)
    todoItem[0].status="completed"
    const todoIndex = this.todoList.indexOf(todoItem[0])
    this.todoList.splice(todoIndex,1)
    this.completedTodos.push(todoItem[0])
  }
}
