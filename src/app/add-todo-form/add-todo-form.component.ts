import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppStoreService} from '../services/app-store.service';
import {SelectedCategories_E} from '../../enums/SelectedCategories_E';
import {CompletedCategories_E} from '../../enums/completed_E';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.sass']
})
export class AddTodoFormComponent implements OnInit {
  form: FormGroup;

  constructor(public appStoreService: AppStoreService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      category: new FormControl(SelectedCategories_E.important, [Validators.minLength(4), Validators.required])
    });
  }

  submit = () => {
    const formData = {...this.form.value};
    const {title, category} = formData;
    const todo = {id: Date.now(), title, category, completed: CompletedCategories_E.notCompleted}
    this.appStoreService.addToDo(todo);
    this.form.reset();
  }
}
