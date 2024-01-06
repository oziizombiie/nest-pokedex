import { FetchAdapter } from 'src/common/adapters/fetch.adapter';
import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';

@Injectable()
export class SeedService {
  constructor(
    private pokemonService: PokemonService,
    private fetchAdapter: FetchAdapter,
  ) {}

  async executeSeed() {
    this.pokemonService.removeAll();

    const pokemonsRequest = await this.fetchAdapter.get<PokeResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=100`,
    );

    const pokemonToInsert: CreatePokemonDto[] = [];

    const pokemonResponse = await pokemonsRequest;
    pokemonResponse.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      pokemonToInsert.push({ name, no });
    });

    this.pokemonService.createMany(pokemonToInsert);

    return 'Seed Executed';
  }
}
