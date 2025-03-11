
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as StarWarsActions from './star-wars.actions';
import { StarWarsService } from '../services/star-wars.service';

@Injectable()
export class StarWarsEffects {
  loadFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StarWarsActions.loadFilms),
      switchMap(() =>
        this.starWarsService.getFilms().pipe(
          map(films => StarWarsActions.loadFilmsSuccess({ films })),
          catchError(error => of(StarWarsActions.loadFilmsFailure({ error })))
        )
      )
    )
  );

  loadFilm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StarWarsActions.loadFilm),
      switchMap(({ id }) =>
        this.starWarsService.getFilmById(id).pipe(
          map(film => StarWarsActions.loadFilmSuccess({ film })),
          catchError(error => of(StarWarsActions.loadFilmFailure({ error })))
        )
      )
    )
  );

  loadCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StarWarsActions.loadCharacter),
      switchMap(({ id }) =>
        this.starWarsService.getCharacterById(id).pipe(
          map(character => StarWarsActions.loadCharacterSuccess({ character })),
          catchError(error => of(StarWarsActions.loadCharacterFailure({ error })))
        )
      )
    )
  );

  loadFilmCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StarWarsActions.loadFilmCharacters),
      switchMap(({ film }) =>
        this.starWarsService.getCharactersForFilm(film).pipe(
          map(characters => StarWarsActions.loadFilmCharactersSuccess({ characters })),
          catchError(error => of(StarWarsActions.loadFilmCharactersFailure({ error })))
        )
      )
    )
  );

  loadCharacterFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StarWarsActions.loadCharacterFilms),
      switchMap(({ character }) =>
        this.starWarsService.getFilmsForCharacter(character).pipe(
          map(films => StarWarsActions.loadCharacterFilmsSuccess({ films })),
          catchError(error => of(StarWarsActions.loadCharacterFilmsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private starWarsService: StarWarsService
  ) {}
}
