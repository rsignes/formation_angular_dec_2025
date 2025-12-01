import { inject, Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
  http = inject(HttpClient);

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  getPokemons(): Observable<Pokemon[]> {
    const headers = new HttpHeaders({
      apiKey: environment.apiKey,
      'Content-Type': 'application/json',
    });

    return this.http.get<Pokemon[]>(`${environment.apiUrl}/pokemon`, {
      headers,
    });
  }
}
