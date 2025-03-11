
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StarWarsState } from './star-wars.reducer';

export const selectStarWarsState = createFeatureSelector<StarWarsState>('starWars');

export const selectFilms = createSelector(
  selectStarWarsState,
  (state: StarWarsState) => state.films
);

export const selectSelectedFilm = createSelector(
  selectStarWarsState,
  (state: StarWarsState) => state.selectedFilm
);

export const selectSelectedCharacter = createSelector(
  selectStarWarsState,
  (state: StarWarsState) => state.selectedCharacter
);

export const selectFilmCharacters = createSelector(
  selectStarWarsState,
  (state: StarWarsState) => state.filmCharacters
);

export const selectCharacterFilms = createSelector(
  selectStarWarsState,
  (state: StarWarsState) => state.characterFilms
);

export const selectLoading = createSelector(
  selectStarWarsState,
  (state: StarWarsState) => state.loading
);

export const selectError = createSelector(
  selectStarWarsState,
  (state: StarWarsState) => state.error
);
