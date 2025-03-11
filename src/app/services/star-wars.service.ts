
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Film } from '../models/film.model';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private baseUrl = 'https://swapi.dev/api';
  private cachedFilms: Film[] | null = null;
  private cachedCharacters = new Map<string, Character>();

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    if (this.cachedFilms) {
      return of(this.cachedFilms);
    }
    
    return this.http.get<{ results: Film[] }>(`${this.baseUrl}/films/`).pipe(
      map(response => {
        this.cachedFilms = response.results;
        return response.results;
      })
    );
  }

  getFilmById(id: string): Observable<Film> {
    if (this.cachedFilms) {
      const film = this.cachedFilms.find(f => this.extractId(f.url) === id);
      if (film) {
        return of(film);
      }
    }
    
    return this.http.get<Film>(`${this.baseUrl}/films/${id}/`);
  }

  getCharacterById(id: string): Observable<Character> {
    if (this.cachedCharacters.has(id)) {
      return of(this.cachedCharacters.get(id)!);
    }
    
    return this.http.get<Character>(`${this.baseUrl}/people/${id}/`).pipe(
      map(character => {
        this.cachedCharacters.set(id, character);
        return character;
      })
    );
  }

  getCharactersForFilm(film: Film): Observable<Character[]> {
    const characterIds = film.characters.map(url => this.extractId(url));
    const characterObservables = characterIds.map(id => {
      if (this.cachedCharacters.has(id)) {
        return of(this.cachedCharacters.get(id)!);
      } else {
        return this.getCharacterById(id);
      }
    });
    
    return forkJoin(characterObservables);
  }

  getFilmsForCharacter(character: Character): Observable<Film[]> {
    const filmIds = character.films.map(url => this.extractId(url));
    
    if (this.cachedFilms) {
      const films = this.cachedFilms.filter(film => filmIds.includes(this.extractId(film.url)));
      if (films.length === filmIds.length) {
        return of(films);
      }
    }
    
    const filmObservables = filmIds.map(id => this.getFilmById(id));
    return forkJoin(filmObservables);
  }

  extractId(url: string): string {
    const parts = url.split('/').filter(part => part !== '');
    return parts[parts.length - 1];
  }
}
