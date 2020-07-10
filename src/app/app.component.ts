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
    this.todoList.unshift(todo)
    localStorage.setItem('task-list',JSON.stringify(this.todoList))
  }
  deleteTodo(id:string) {
    const todoItem = this.completedTodos.filter(todo => todo.id === +id)
    const todoIndex = this.todoList.indexOf(todoItem[0])
    this.completedTodos.splice(todoIndex,1)
    localStorage.setItem('completed-tasks',JSON.stringify(this.completedTodos))
  }
  checkTodo(id:string) {
    if(this.completedTodos.length>=10){
      this.completedTodos.shift()
    }
    const todoItem = this.todoList.filter(todo => todo.id === +id)
    todoItem[0].status="completed"
    const todoIndex = this.todoList.indexOf(todoItem[0])
    this.todoList.splice(todoIndex,1)
    localStorage.setItem('task-list',JSON.stringify(this.todoList))
    this.completedTodos.push(todoItem[0])
    localStorage.setItem('completed-tasks',JSON.stringify(this.completedTodos))
  }
ngOnInit(){
  if(!!localStorage && localStorage.getItem('task-list')){
    this.todoList= JSON.parse(localStorage.getItem('task-list'))
    this.completedTodos= JSON.parse(localStorage.getItem('completed-tasks'))
  }
}
}
