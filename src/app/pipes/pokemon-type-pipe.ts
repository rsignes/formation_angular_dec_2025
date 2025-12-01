import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonType',
})
export class PokemonTypePipe implements PipeTransform {
  transform(type: string): string {
    let emoji = '🤷‍♂️';

    switch (type) {
      case 'Électrique':
        emoji = '⚡️';
        break;
      case 'Plante':
        emoji = '🌱';
        break;
      case 'Feu':
        emoji = '🔥';
        break;
      case 'Eau':
        emoji = '🌊';
        break;
    }

    return `${emoji}${type}${emoji}`;
  }
}
