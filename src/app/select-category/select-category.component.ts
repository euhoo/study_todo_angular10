import {Component, OnInit} from '@angular/core';
import {AppStoreService} from '../services/app-store.service';
import {Categories_E} from '../../categories_E';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.sass']
})
export class SelectCategoryComponent implements OnInit{
  selected: Categories_E;

  constructor(public appStoreService: AppStoreService) { }

  setCategory = () => {
    if (!this.selected) {
      this.appStoreService.resetCategory();
      return;
    }
    this.appStoreService.setCategory(this.selected);
  }

  ngOnInit(): void {
    this.selected = Categories_E.all;
  }
}
