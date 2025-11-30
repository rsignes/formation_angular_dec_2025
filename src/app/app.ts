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
}
