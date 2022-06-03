import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  getBooks(genre: string): Observable<any> {
    return this.httpClient
      .get(`http://skunkworks.ignitesol.com:8000/books/?topic=${genre}`)
      .pipe(map((response: object) => response));
  }

  searchBooks(searchText: string): Observable<any> {
    return this.httpClient
      .get(`http://skunkworks.ignitesol.com:8000/books/?search=${searchText}`)
      .pipe(map((response: object) => response));
  }
}
