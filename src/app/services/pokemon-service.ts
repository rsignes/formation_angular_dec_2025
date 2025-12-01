import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  selectedPokemon?: Pokemon;
  pokemons: Pokemon[] = [
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

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }
}
