import { Routes } from '@angular/router';
import { PokemonList } from './components/pokemon-list/pokemon-list';
import { PokemonDetails } from './components/pokemon-details/pokemon-details';
import { Login } from './components/login/login';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'home',
    component: PokemonList,
  },
  {
    path: 'pokemon/:name',
    component: PokemonDetails,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
