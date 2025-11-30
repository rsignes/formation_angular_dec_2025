import { Component, OnInit, signal } from '@angular/core';
import { PokemonCard } from './components/pokemon-card/pokemon-card';
import { Pokemon } from './interfaces/pokemon';

@Component({
  selector: 'app-root',
  imports: [PokemonCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('formation_angular_dec_2025');
  selectedPokemon?: Pokemon;

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

  ngOnInit(): void {
    this.selectedPokemon = this.pokemons[0];
  }

  handlePokemonSelected(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }
}
