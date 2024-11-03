import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  API_URL ='https://jsonplaceholder.typicode.com/todos';
  http = inject(HttpClient)

  // todoItems: Array<Todo> = [
  //   { id: 1, completed: true, title: 'First Duty', userId: 1 },
  //   { id: 2, completed: false, title: 'Second Duty', userId: 2 },
  //   { id: 3, completed: false, title: 'Third Duty', userId: 3 },
  //   { id: 4, completed: false, title: 'Fourth Duty', userId: 3 },
  //   { id: 5, completed: false, title: 'Fifth Duty', userId: 2 },
  //   { id: 6, completed: false, title: 'Sixth Duty', userId: 5 },
  // ];

  getTodosFromApi(){
    return this.http.get<Array<Todo>>(this.API_URL)
  }
}
