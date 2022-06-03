import * as fromBook from './book.actions';

describe('fetchGenresBooks', () => {
  it('should return an action', () => {
    expect(fromBook.fetchGenresBooks().type).toBe('[Book] FetchGenres Books');
  });
});
