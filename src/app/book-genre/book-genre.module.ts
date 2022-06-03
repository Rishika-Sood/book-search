import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreViewComponent } from './genre-view/genre-view.component';
import { StoreModule } from '@ngrx/store';

import { bookFeatureKey, reducer } from './store/reducer/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/effect/book.effects';
import { GenreBookComponent } from './genre-book/genre-book.component';

@NgModule({
  declarations: [GenreViewComponent, GenreBookComponent],
  imports: [CommonModule, StoreModule.forFeature(bookFeatureKey, reducer), EffectsModule.forFeature([BookEffects])],
  exports: [GenreViewComponent],
})
export class BookGenreModule {}
