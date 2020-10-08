import {Injectable} from '@angular/core';
import {TodoListItem} from '../../types/Todo_T';
import {Categories_E, categoriesList} from '../../categories_E';


const list: TodoListItem[] = [
  { id: 1, text: 'сделать дело 1', title: 'дело 1', isDone: false, category: Categories_E.hard},
  { id: 2, text: 'сделать дело 2', title: 'дело 2', isDone: true, category: Categories_E.important},
  { id: 3, text: 'сделать дело 3', title: 'дело 3', isDone: true, category: Categories_E.simple},
  { id: 4, text: 'сделать дело 4', title: 'дело 4', isDone: true, category: Categories_E.hard},
  { id: 5, text: 'сделать дело 5', title: 'дело 5', isDone: false, category: Categories_E.important},
  { id: 6, text: 'сделать дело 6', title: 'дело 6', isDone: false, category: Categories_E.simple},
  { id: 7, text: 'сделать дело 7', title: 'дело 7', isDone: false, category: Categories_E.hard},
];

interface AppStore {
  todos: TodoListItem[];
  delToDo: (id: number) => void;
  addToDo: (todo: TodoListItem) => void;
  selectedCategory: Categories_E | undefined;
  setCategory: (category: Categories_E) => void;
  resetCategory: () => void;
  categoriesList: Categories_E[];
}

@Injectable({providedIn: 'root'})
export class AppStoreService implements AppStore {
  todos: TodoListItem[] = list;
  selectedCategory: Categories_E = undefined;
  categoriesList = categoriesList;

  addToDo = (todo: TodoListItem): void => {
    this.todos = [todo, ...this.todos];
  }

  delToDo = (id: number): void => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  setCategory = (category: Categories_E ) => this.selectedCategory = category;
  resetCategory = () => this.selectedCategory = undefined;
}
