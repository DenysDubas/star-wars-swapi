
import { Routes } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

export const routes: Routes = [
  { path: '', component: FilmListComponent },
  { path: 'film/:id', component: FilmDetailComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: '**', redirectTo: '' }
];
