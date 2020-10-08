import {Component, OnInit} from '@angular/core';
import {AppStoreService} from '../services/app-store.service';
import {SelectedCategories_E} from '../../enums/SelectedCategories_E';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.sass']
})
export class SelectCategoryComponent{
  selected: SelectedCategories_E = SelectedCategories_E.all;

  constructor(public appStoreService: AppStoreService) { }

  setCategory = () => {
    if (!this.selected) {
      this.appStoreService.resetCategory();
      return;
    }
    this.appStoreService.setCategory(this.selected);
  }
}
