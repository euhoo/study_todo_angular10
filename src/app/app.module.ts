import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { AppTodoFiltersComponent } from './app-todo-filters/app-todo-filters.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodoFilterPipe } from './todo-filter.pipe';
import { SelectFinishedComponent } from './select-finished/select-finished.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AppTodoFiltersComponent,
    SelectCategoryComponent,
    TodoFilterPipe,
    SelectFinishedComponent,
    AddTodoFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
