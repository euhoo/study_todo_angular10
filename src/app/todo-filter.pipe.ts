import {Pipe, PipeTransform} from '@angular/core';
import {TodoListItem} from '../types/Todo_T';
import {Categories_E} from '../categories_E';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(list: TodoListItem[], cat: Categories_E): TodoListItem[] {
    if (cat === Categories_E.all || !cat) {
      return list;
    }
    return list.filter(todo => todo.category === cat);
  }

}
