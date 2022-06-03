import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GenreViewComponent } from './book-genre/genre-view/genre-view.component';
import { GenreBookComponent } from './book-genre/genre-book/genre-book.component';

const routes: Routes = [
  {
    path: '',
    component: GenreViewComponent,
  },
  {
    path: 'genre/:genre',
    component: GenreBookComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled', relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
