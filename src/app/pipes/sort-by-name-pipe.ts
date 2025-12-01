import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Pipe({
  name: 'sortByName',
})
export class SortByNamePipe implements PipeTransform {
  transform(pokemons: Pokemon[] | null, direction: 'asc' | 'des' = 'asc'): Pokemon[] {
    return pokemons && pokemons.length
      ? pokemons.sort((a, b) =>
          direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        )
      : [];
  }
}
