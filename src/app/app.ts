import { Component, signal } from '@angular/core';
import { PokemonCard } from './components/pokemon-card/pokemon-card';

@Component({
  selector: 'app-root',
  imports: [PokemonCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('formation_angular_dec_2025');

  pokemons = [
    {
      name: 'Pikachu',
      type: 'Électrique',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      weight: 6,
      size: 0.4,
    },
    {
      name: 'Bulbizarre',
      type: 'Plante',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      weight: 6.9,
      size: 0.7,
    },
  ];
}
