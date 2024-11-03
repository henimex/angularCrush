import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../model/todo.type';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { TodoFilterPipe } from "../pipes/todo-filter.pipe";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, FormsModule, TodoFilterPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.getTodoItems();
  }

  getTodoItems() {
    this.todoService.getTodosFromApi().subscribe((response) => {
      this.todoItems.set(response);
    });
  }

  itemClicedFromParentChangeChild(dataFromClick: Todo) {
    this.todoItems.update((todoList) => {
      return todoList.map((todoItem) => {
        if (todoItem.id === dataFromClick.id) {
          return {
            ...todoItem,
            completed: !todoItem.completed,
          };
        }
        return todoItem;
      });
    });
  }
}
