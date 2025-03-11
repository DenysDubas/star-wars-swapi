
import { createReducer, on } from '@ngrx/store';
import * as StarWarsActions from './star-wars.actions';
import { Film } from '../models/film.model';
import { Character } from '../models/character.model';

export interface StarWarsState {
  films: Film[];
  selectedFilm: Film | null;
  selectedCharacter: Character | null;
  filmCharacters: Character[];
  characterFilms: Film[];
  loading: boolean;
  error: any;
}

export const initialState: StarWarsState = {
  films: [],
  selectedFilm: null,
  selectedCharacter: null,
  filmCharacters: [],
  characterFilms: [],
  loading: false,
  error: null
};

export const starWarsReducer = createReducer(
  initialState,
  on(StarWarsActions.loadFilms, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(StarWarsActions.loadFilmsSuccess, (state, { films }) => ({
    ...state,
    films,
    loading: false
  })),
  on(StarWarsActions.loadFilmsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(StarWarsActions.loadFilm, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(StarWarsActions.loadFilmSuccess, (state, { film }) => ({
    ...state,
    selectedFilm: film,
    loading: false
  })),
  on(StarWarsActions.loadFilmFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(StarWarsActions.loadCharacter, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(StarWarsActions.loadCharacterSuccess, (state, { character }) => ({
    ...state,
    selectedCharacter: character,
    loading: false
  })),
  on(StarWarsActions.loadCharacterFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(StarWarsActions.loadFilmCharacters, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(StarWarsActions.loadFilmCharactersSuccess, (state, { characters }) => ({
    ...state,
    filmCharacters: characters,
    loading: false
  })),
  on(StarWarsActions.loadFilmCharactersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  on(StarWarsActions.loadCharacterFilms, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(StarWarsActions.loadCharacterFilmsSuccess, (state, { films }) => ({
    ...state,
    characterFilms: films,
    loading: false
  })),
  on(StarWarsActions.loadCharacterFilmsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
