import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  catchError,
  debounceTime,
  map,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { BookService } from '../../service/book.service';
import {
  BookActions,
  FetchBooks,
  FetchBooksSuccess,
  SearchBooks,
  SearchBooksSuccess,
} from '../action/book.actions';
import { State } from '../reducer/book.reducer';

@Injectable()
export class BookEffects {
  constructor(
    private actions$: Actions<BookActions>,
    private bookService: BookService,
    private store$: Store<State>
  ) {}

  fetchBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FetchBooks),
      withLatestFrom(this.store$),
      switchMap(([action, _]) =>
        this.bookService.getBooks(action.payload.genre).pipe(
          map((response) => {
            return FetchBooksSuccess({
              payload: { books: response.results, genre: action.payload.genre },
            });
          }),
          catchError((err: Error) => {
            console.error(err);
            return of();
          })
        )
      )
    )
  );

  searchBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchBooks),
      debounceTime(250),
      withLatestFrom(this.store$),
      switchMap(([action, _]) =>
        this.bookService.searchBooks(action.payload.searchText).pipe(
          map((response) => {
            return SearchBooksSuccess({
              payload: { books: response.results },
            });
          }),
          catchError((err: Error) => {
            console.error(err);
            return of();
          })
        )
      )
    )
  );
}
