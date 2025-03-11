
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Film } from '../../models/film.model';
import * as StarWarsActions from '../../store/star-wars.actions';
import { selectFilms, selectLoading } from '../../store/star-wars.selectors';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StarWarsService } from '../../services/star-wars.service';

@Component({
  selector: 'app-film-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films$: Observable<Film[]>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store,
    private starWarsService: StarWarsService
  ) {
    this.films$ = this.store.select(selectFilms);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(StarWarsActions.loadFilms());
  }

  getFilmId(url: string): string {
    return this.starWarsService.extractId(url);
  }
}
