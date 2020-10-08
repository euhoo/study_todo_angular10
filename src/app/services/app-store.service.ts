import {Injectable} from '@angular/core';
import {TodoListItem} from '../../types/Todo_T';
import {categoriesList, SelectedCategories_E} from '../../enums/SelectedCategories_E';
import {CompletedCategories_E, completedCategoriesList} from '../../enums/completed_E';


const list: TodoListItem[] = [
  { id: 1, title: 'дело 1', completed: CompletedCategories_E.notCompleted, category: SelectedCategories_E.hard},
  { id: 2, title: 'дело 2', completed: CompletedCategories_E.completed, category: SelectedCategories_E.important},
  { id: 3, title: 'дело 3', completed: CompletedCategories_E.completed, category: SelectedCategories_E.simple},
  { id: 4, title: 'дело 4', completed: CompletedCategories_E.notCompleted, category: SelectedCategories_E.hard},
  { id: 5, title: 'дело 5', completed: CompletedCategories_E.notCompleted, category: SelectedCategories_E.important},
  { id: 6, title: 'дело 6', completed: CompletedCategories_E.notCompleted, category: SelectedCategories_E.simple},
  { id: 7, title: 'дело 7', completed: CompletedCategories_E.notCompleted, category: SelectedCategories_E.hard},
];

interface AppStore {
  todos: TodoListItem[];
  delToDo: (id: number) => void;
  addToDo: (todo: TodoListItem) => void;
  selectedCategory: SelectedCategories_E;
  completedCategory: CompletedCategories_E;
  setCategory: (category: SelectedCategories_E) => void;
  resetCategory: () => void;
  categoriesList: SelectedCategories_E[];
  completedCategoriesList: CompletedCategories_E[];

}

@Injectable({providedIn: 'root'})
export class AppStoreService implements AppStore {
  todos: TodoListItem[] = list;
  selectedCategory: SelectedCategories_E = SelectedCategories_E.all;
  completedCategory: CompletedCategories_E = CompletedCategories_E.all;
  categoriesList = categoriesList;
  completedCategoriesList = completedCategoriesList;

  addToDo = (todo: TodoListItem): void => {
    this.todos = [todo, ...this.todos];
  }

  delToDo = (id: number): void => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  setCategory = (category: SelectedCategories_E ) => this.selectedCategory = category;
  resetCategory = () => this.selectedCategory = SelectedCategories_E.all;
  setCompletedCategory = (category: CompletedCategories_E) => this.completedCategory = category;
  resetCompletedCategory = () => this.completedCategory = CompletedCategories_E.all;
}
