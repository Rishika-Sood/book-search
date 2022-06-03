import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreBookComponent } from './genre-book.component';

describe('GenreBookComponent', () => {
  let component: GenreBookComponent;
  let fixture: ComponentFixture<GenreBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
