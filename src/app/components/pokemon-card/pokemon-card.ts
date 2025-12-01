import { Component, input, InputSignal, output, signal, WritableSignal } from '@angular/core';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
  MatCardContent,
} from '@angular/material/card';
import { Pokemon } from '../../interfaces/pokemon';
import { HoverBackground } from '../../directives/hover-background';
import { PokemonTypePipe } from '../../pipes/pokemon-type-pipe';

@Component({
  selector: 'app-pokemon-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    HoverBackground,
    PokemonTypePipe,
  ],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.scss',
})
export class PokemonCard {
  pokemon: InputSignal<Pokemon> = input.required();
  selected = output<Pokemon>();
}
