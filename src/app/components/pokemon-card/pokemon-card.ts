import { Component, input } from '@angular/core';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
  MatCardContent,
} from '@angular/material/card';

@Component({
  selector: 'app-pokemon-card',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.scss',
})
export class PokemonCard {
  name = input('Pikachu');
  type = input('Électrique');
  image = input('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png');
  weight = input(6);
  size = input(0.4);
}
