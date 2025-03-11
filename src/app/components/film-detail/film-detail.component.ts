
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Film } from '../../models/film.model';
import { Character } from '../../models/character.model';
import * as StarWarsActions from '../../store/star-wars.actions';
import { selectSelectedFilm, selectFilmCharacters, selectLoading } from '../../store/star-wars.selectors';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { StarWarsService } from '../../services/star-wars.service';

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  film$: Observable<Film | null>;
  characters$: Observable<Character[]>;
  loading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private starWarsService: StarWarsService
  ) {
    this.film$ = this.store.select(selectSelectedFilm);
    this.characters$ = this.store.select(selectFilmCharacters);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.store.dispatch(StarWarsActions.loadFilm({ id }));
        
        this.film$.subscribe(film => {
          if (film) {
            this.store.dispatch(StarWarsActions.loadFilmCharacters({ film }));
          }
        });
      }
    });
  }

  getCharacterId(url: string): string {
    return this.starWarsService.extractId(url);
  }
}
