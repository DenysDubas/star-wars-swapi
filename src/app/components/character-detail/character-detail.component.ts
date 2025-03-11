
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../../models/character.model';
import { Film } from '../../models/film.model';
import * as StarWarsActions from '../../store/star-wars.actions';
import { selectSelectedCharacter, selectCharacterFilms, selectLoading } from '../../store/star-wars.selectors';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { StarWarsService } from '../../services/star-wars.service';

@Component({
  selector: 'app-character-detail',
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
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character$: Observable<Character | null>;
  films$: Observable<Film[]>;
  loading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private starWarsService: StarWarsService
  ) {
    this.character$ = this.store.select(selectSelectedCharacter);
    this.films$ = this.store.select(selectCharacterFilms);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.store.dispatch(StarWarsActions.loadCharacter({ id }));

        this.character$.subscribe(character => {
          if (character) {
            this.store.dispatch(StarWarsActions.loadCharacterFilms({ character }));
          }
        });
      }
    });
  }

  getFilmId(url: string): string {
    return this.starWarsService.extractId(url);
  }
}
