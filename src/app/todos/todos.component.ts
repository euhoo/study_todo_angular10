import {Component} from '@angular/core';
import {AppStoreService} from '../services/app-store.service';
import {CompletedCategories_E} from '../../enums/completed_E';
import {TodoListItem} from '../../types/Todo_T';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent {
  constructor(public appStoreService: AppStoreService) { }

  checkIfCompleted = (todo: TodoListItem)  => todo.completed === CompletedCategories_E.completed;
}
