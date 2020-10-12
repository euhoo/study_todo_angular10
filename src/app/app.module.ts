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
import { AddFetchTodosComponent } from './add-fetch-todos/add-fetch-todos.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AppTodoFiltersComponent,
    SelectCategoryComponent,
    TodoFilterPipe,
    SelectFinishedComponent,
    AddTodoFormComponent,
    AddFetchTodosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
