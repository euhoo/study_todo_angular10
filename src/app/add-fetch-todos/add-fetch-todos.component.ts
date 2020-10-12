import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, Subject, throwError} from 'rxjs';
import {catchError, delay, map, take, takeUntil} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {AppStoreService} from '../services/app-store.service';
import {FetchedTodoListItem} from '../../types/Todo_T';
import {CompletedCategories_E} from '../../enums/completed_E';
import {SelectedCategories_E} from '../../enums/SelectedCategories_E';

@Component({
  selector: 'app-add-fetch-todos',
  templateUrl: './add-fetch-todos.component.html',
  styleUrls: ['./add-fetch-todos.component.sass']
})
export class AddFetchTodosComponent implements OnInit, OnDestroy {
  public isFetching = false;
  private onDestroy$ = new Subject();

  constructor(private http: HttpClient, private appStoreService: AppStoreService) {}

  subscribeOnFetchBtnClick = () => {
    const btn = document.getElementById('fetch-todos-btn');
    const clickStream$ = fromEvent(btn, 'click')
      .pipe(
        takeUntil(this.onDestroy$),
      );
    clickStream$.subscribe(e => {
      this.isFetching = true;
      this.fetchTodos();
    });
  }

  ngOnInit(): void {
    this.subscribeOnFetchBtnClick();
    this.subscribeOnDestroyBtnClick();
  }

  subscribeOnDestroyBtnClick = () => {
    const btn = document.getElementById('disable-fetching-todos-btn');
    fromEvent(btn, 'click')
      .pipe(
        take(1)
      )
      .subscribe(() => {
        this.onDestroy$.next();
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  fetchTodos = () => {
    this.http.get<FetchedTodoListItem[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .pipe(
        delay(300),
        take(1),
        map(todos => todos.map(todo => (
          {title: todo.title,
            category: SelectedCategories_E.important,
            id: +`${Date.now()}${todo.id}`, // чтобы было уникальное id
            completed: todo.completed ? CompletedCategories_E.completed : CompletedCategories_E.notCompleted
          }
            ))),
        catchError(err => {
          this.isFetching = false;
          return throwError(err);
        }),
      )
      .subscribe(todos => {
        todos.forEach(todo => {
          this.appStoreService.addToDo(todo);
        });
        this.isFetching = false;
      });
  }
}
