import { Component, OnInit } from '@angular/core';
import {AppStoreService} from '../services/app-store.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent {

  constructor(public appStoreService: AppStoreService) { }


}
