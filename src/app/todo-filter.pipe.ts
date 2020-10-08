import {Pipe, PipeTransform} from '@angular/core';
import {TodoListItem} from '../types/Todo_T';
import {SelectedCategories_E} from '../enums/SelectedCategories_E';
import {AppStoreService} from './services/app-store.service';
import {CompletedCategories_E} from '../enums/completed_E';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {
  constructor(private appStoreService: AppStoreService) {
  }

  transform(list: TodoListItem[], selected: SelectedCategories_E, completed: CompletedCategories_E ): TodoListItem[] {
    console.log(selected);
    console.log(completed);
    const filteredByCategory = this.filterBySelectedCategory(list);
    return this.filterByCompleted(filteredByCategory);
  }
  filterBySelectedCategory = (list: TodoListItem[]) => {
    const cat = this.appStoreService.selectedCategory;
    if (cat === SelectedCategories_E.all || !cat) {
      return list;
    }
    return list.filter(todo => todo.category === cat);
  }
  filterByCompleted = (list: TodoListItem[]) => {
    const cat = this.appStoreService.completedCategory;
    console.log(cat);
    if (cat === CompletedCategories_E.all || !cat) {
      return list;
    }
    return list.filter(todo => todo.completed === cat);
  }

}
