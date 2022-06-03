import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookGenre, BooksList } from '../../types/book';
import { State } from '../reducer/book.reducer';
import * as fromBooks from '../reducer/book.reducer';

export const selectBooksState = createFeatureSelector<State>(
  fromBooks.bookFeatureKey
);

export const selectAllBooks = createSelector(
  selectBooksState,
  (state) => state.books
);

export const selectBooks = (genre: BookGenre) =>
  createSelector(selectBooksState, (state: State) => {
    if(state.searchKeyword === '') {
      return state.books[genre];
    }
    else {
      return state.searchResult;
    }
  });


