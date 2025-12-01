import { Routes } from '@angular/router';
import { PokemonList } from './components/pokemon-list/pokemon-list';
import { PokemonDetails } from './components/pokemon-details/pokemon-details';

export const routes: Routes = [
  {
    path: 'home',
    component: PokemonList,
  },
  {
    path: 'pokemon/:name',
    component: PokemonDetails,
  },
  // {
  //   path: '**',
  //   redirectTo: 'home',
  // },
];
