import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonCard } from './components/pokemon-card/pokemon-card';
import { Pokemon } from './interfaces/pokemon';
import { PokemonService } from './services/pokemon-service';

@Component({
  selector: 'app-root',
  imports: [PokemonCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('formation_angular_dec_2025');
  pokemonService = inject(PokemonService);
  pokemons = this.pokemonService.pokemons;

  ngOnInit(): void {
    this.pokemonService.selectedPokemon = this.pokemonService.pokemons[0];
  }

  handlePokemonSelected(pokemon: Pokemon) {
    this.pokemonService.selectedPokemon = pokemon;
  }
}
