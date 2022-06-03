import { createAction, props } from '@ngrx/store';
import { BookGenre, Books } from '../../types/book';

export const FetchBooks = createAction(
  '[Book] Fetch Books',
  props<{ payload: { genre: BookGenre } }>()
);

export const FetchBooksSuccess = createAction(
  '[Book] Fetch Books Success',
  props<{ payload: { books: Books; genre: BookGenre } }>()
);

export const SearchBooks = createAction(
  '[Book] Search Books',
  props<{ payload: { searchText: string } }>()
);

export const SearchBooksSuccess = createAction(
  '[Book] Search Book Success',
  props<{payload: {books: Books}}>()
);

export const ClearSearchResults = createAction(
  '[Book] Clear Search Results'
);

export type BookActions =
  | typeof FetchBooks
  | typeof FetchBooksSuccess
  | typeof SearchBooks
  | typeof ClearSearchResults;
