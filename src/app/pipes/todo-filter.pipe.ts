import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'todoFilter',
  standalone: true,
})
export class TodoFilterPipe implements PipeTransform {
  transform(todoList: Todo[], searchText: string): Todo[] {
    if (!searchText) {
      return todoList;
    }

    const convertedSearchText = searchText.toLocaleLowerCase();

    return todoList.filter((x) => {
      return x.title.toLocaleLowerCase().includes(convertedSearchText);
    });
  }
}
