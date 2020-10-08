import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodoFilterPipe } from './todo-filter.pipe';
import { SelectFinishedComponent } from './select-finished/select-finished.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodoFormComponent,
    SelectCategoryComponent,
    TodoFilterPipe,
    SelectFinishedComponent
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
