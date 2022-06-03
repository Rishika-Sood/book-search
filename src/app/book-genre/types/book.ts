export type Genre = {
  icon: string;
  name: BookGenre;
};

type author = {
  birth_year: Number;
  death_year: Number;
  name: string;
};

export type Book = {
  id: Number;
  authors: ReadonlyArray<author>;
  bookshelves: ReadonlyArray<string>;
  download_count: Number;
  languages: ReadonlyArray<string>;
  media_type: string;
  subjects: ReadonlyArray<string>;
  title: string;
};

export type Books = ReadonlyArray<Book>;
export type BooksList = Record<BookGenre, Books>;

export enum BookGenre {
  FICTION = 'FICTION',
  DRAMA = 'DRAMA',
  HUMOUR = 'HUMOUR',
  POLITICS = 'POLITICS',
  PHILOSOPHY = 'PHILOSOPHY',
  HISTORY = 'HISTORY',
  ADVENTURE = 'ADVENTURE',
}


