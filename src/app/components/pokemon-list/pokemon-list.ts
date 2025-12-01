import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { RouterLink } from '@angular/router';
import { SortByNamePipe } from '../../pipes/sort-by-name-pipe';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCard, RouterLink, SortByNamePipe, AsyncPipe],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
})
export class PokemonList implements OnInit {
  pokemonService = inject(PokemonService);
  pokemons$?: Observable<Pokemon[]>;

  ngOnInit(): void {
    this.pokemonService.selectedPokemon = this.pokemonService.pokemons[0];

    this.pokemons$ = this.pokemonService.getPokemons();
  }

  handlePokemonSelected(pokemon: Pokemon) {
    this.pokemonService.selectedPokemon = pokemon;
  }
}
