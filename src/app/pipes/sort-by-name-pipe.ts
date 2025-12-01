import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Pipe({
  name: 'sortByName',
})
export class SortByNamePipe implements PipeTransform {
  transform(pokemons: Pokemon[] | null, asc = true): Pokemon[] {
    return pokemons && pokemons.length
      ? pokemons.sort((a, b) => (asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)))
      : [];
  }
}
