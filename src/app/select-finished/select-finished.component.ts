import { Component, OnInit } from '@angular/core';
import {AppStoreService} from '../services/app-store.service';
import {CompletedCategories_E} from '../../enums/completed_E';

@Component({
  selector: 'app-select-finished',
  templateUrl: './select-finished.component.html',
  styleUrls: ['./select-finished.component.sass']
})
export class SelectFinishedComponent{
  selected: CompletedCategories_E = CompletedCategories_E.all;
  constructor(public appStoreService: AppStoreService) { }

  setCategory = () => {
    if (!this.selected) {
      this.appStoreService.resetCategory();
      return;
    }
    this.appStoreService.setCompletedCategory(this.selected);
  }
}
