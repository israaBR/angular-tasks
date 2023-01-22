import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor() {}
  inputValue: string = '';
  todos: string[] = [];
  addTODO(): void {
    this.todos.push(this.inputValue);
    this.inputValue = '';
  }
  removeTODO(i: number) {
    this.todos = this.todos.filter((item, index) => index != i);
  }
}
