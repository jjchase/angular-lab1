import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    { task: 'Clean clothes', completed: true },
    { task: 'Walk Dog', completed: false },
    { task: 'Feed the fish', completed: false },
    { task: 'Clean room', completed: true },
    { task: 'Take out trash', completed: false },
    { task: 'Wash car', completed: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
