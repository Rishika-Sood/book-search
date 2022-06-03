import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FetchBooks } from '../store/action/book.actions';
import { State } from '../store/reducer/book.reducer';
import { BookGenre, Genre } from '../types/book';

@Component({
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html',
  styleUrls: ['./genre-view.component.scss'],
})
export class GenreViewComponent implements OnInit {
  genresList: ReadonlyArray<Genre> = [
    {
      icon: '../../assets/icons/Fiction.svg',
      name: BookGenre.FICTION,
    },
    {
      icon: '../../assets/icons/Drama.svg',
      name: BookGenre.DRAMA,
    },
    {
      icon: '../../assets/icons/Humour.svg',
      name: BookGenre.HUMOUR,
    },
    {
      icon: '../../assets/icons/Politics.svg',
      name: BookGenre.POLITICS,
    },
    {
      icon: '../../assets/icons/Philosophy.svg',
      name: BookGenre.PHILOSOPHY,
    },
    {
      icon: '../../assets/icons/History.svg',
      name: BookGenre.HISTORY,
    },
    {
      icon: '../../assets/icons/Adventure.svg',
      name: BookGenre.ADVENTURE,
    },
  ];

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {}

  selectedGenre(genre: Genre): void {
    this.router.navigate([`/genre/${genre.name}`]);
    this.store.dispatch(FetchBooks({ payload: { genre: genre.name as BookGenre } }));
  }
}
