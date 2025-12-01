import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  imports: [],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.scss',
})
export class PokemonDetails {
  pokemonService = inject(PokemonService);
  route = inject(ActivatedRoute);
  pokemonName: string = '';

  ngOnInit(): void {
    this.pokemonName = this.route.snapshot.paramMap.get('name') || '';
  }
}
