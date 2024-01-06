import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  async executeSeed() {
    const pokemonsRequest = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=150`,
    );
    const pokemonResponse: PokeResponse = await pokemonsRequest.json();

    pokemonResponse.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      console.log({ name, no });
    });

    return pokemonResponse.results;
  }
}
