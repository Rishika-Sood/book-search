import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ClearSearchResults, SearchBooks } from '../store/action/book.actions';
import { State } from '../store/reducer/book.reducer';
import { selectBooks } from '../store/selector/book.selectors';
import { BookGenre, Books } from '../types/book';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-genre-book',
  templateUrl: './genre-book.component.html',
  styleUrls: ['./genre-book.component.scss'],
})
export class GenreBookComponent implements OnInit {
  books$: Observable<Books>;
  genre: BookGenre;

  constructor(private router: Router, private readonly store: Store<State>) {
    const url = router.routerState.snapshot.url.split('/').pop();
    this.genre = url ? (url as BookGenre) : BookGenre.FICTION;
    this.books$ = this.store.pipe(select(selectBooks(this.genre)));
  }

  ngOnInit(): void {}

  searchBooks(event: any): void {
    this.store.dispatch(
      SearchBooks({ payload: { searchText: event.target.value } })
    );
  }

  backToHome(): void {
    this.store.dispatch(ClearSearchResults());
    this.router.navigate(['']);
  }
}
