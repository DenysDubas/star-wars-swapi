
import { createAction, props } from '@ngrx/store';
import { Film } from '../models/film.model';
import { Character } from '../models/character.model';

export const loadFilms = createAction('[Films] Load Films');
export const loadFilmsSuccess = createAction(
  '[Films] Load Films Success',
  props<{ films: Film[] }>()
);
export const loadFilmsFailure = createAction(
  '[Films] Load Films Failure',
  props<{ error: any }>()
);

export const loadFilm = createAction(
  '[Films] Load Film',
  props<{ id: string }>()
);
export const loadFilmSuccess = createAction(
  '[Films] Load Film Success',
  props<{ film: Film }>()
);
export const loadFilmFailure = createAction(
  '[Films] Load Film Failure',
  props<{ error: any }>()
);

export const loadCharacter = createAction(
  '[Characters] Load Character',
  props<{ id: string }>()
);
export const loadCharacterSuccess = createAction(
  '[Characters] Load Character Success',
  props<{ character: Character }>()
);
export const loadCharacterFailure = createAction(
  '[Characters] Load Character Failure',
  props<{ error: any }>()
);

export const loadFilmCharacters = createAction(
  '[Characters] Load Film Characters',
  props<{ film: Film }>()
);
export const loadFilmCharactersSuccess = createAction(
  '[Characters] Load Film Characters Success',
  props<{ characters: Character[] }>()
);
export const loadFilmCharactersFailure = createAction(
  '[Characters] Load Film Characters Failure',
  props<{ error: any }>()
);

export const loadCharacterFilms = createAction(
  '[Characters] Load Character Films',
  props<{ character: Character }>()
);
export const loadCharacterFilmsSuccess = createAction(
  '[Characters] Load Character Films Success',
  props<{ films: Film[] }>()
);
export const loadCharacterFilmsFailure = createAction(
  '[Characters] Load Character Films Failure',
  props<{ error: any }>()
);
