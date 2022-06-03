import { InjectionToken } from '@angular/core';
import { Action, createReducer, on } from '@ngrx/store';
import { BookGenre, Books, BooksList } from '../../types/book';
import { ClearSearchResults, FetchBooksSuccess, SearchBooks, SearchBooksSuccess } from '../action/book.actions';

export const bookFeatureKey = 'book';

export interface State {
  books: BooksList;
  searchResult: Books;
  searchKeyword: string;
}

export const initialState: State = {
  books: {
    [BookGenre.FICTION]: [],
    [BookGenre.DRAMA]: [],
    [BookGenre.HUMOUR]: [],
    [BookGenre.POLITICS]: [],
    [BookGenre.PHILOSOPHY]: [],
    [BookGenre.HISTORY]: [],
    [BookGenre.ADVENTURE]: [],
  },
  searchResult: [],
  searchKeyword: ''
};

export const reducer = createReducer(
  initialState,
  on(FetchBooksSuccess, (state, { payload }) => ({
    ...state,
    books: {
      ...state.books,
      ...state.books[payload.genre],
      [payload.genre]: payload.books,
    },
  })),
  on(SearchBooks, (state, {payload}) => ({
    ...state,
    searchKeyword: payload.searchText
  })),
  on(SearchBooksSuccess, (state, {payload}) => ({
    ...state,
    searchResult: payload.books
  })),
  on(ClearSearchResults, (state) => ({
    ...state,
    searchResult: [],
    searchKeyword: ''
  }))
);

