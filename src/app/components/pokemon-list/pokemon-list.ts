import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { RouterLink } from '@angular/router';
import { SortByNamePipe } from '../../pipes/sort-by-name-pipe';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCard, RouterLink, SortByNamePipe],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
})
export class PokemonList implements OnInit {
  pokemonService = inject(PokemonService);
  pokemons = this.pokemonService.pokemons;

  ngOnInit(): void {
    this.pokemonService.selectedPokemon = this.pokemonService.pokemons[0];
  }

  handlePokemonSelected(pokemon: Pokemon) {
    this.pokemonService.selectedPokemon = pokemon;
  }
}
