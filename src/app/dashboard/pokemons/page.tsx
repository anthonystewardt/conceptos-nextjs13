import { PokemonGrid } from '@/components';
import { PokemonResponse, SimplePokemon } from '@/interfaces/pokemons';
import Image from 'next/image';
import React from 'react';

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse =  await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (res) => res.json()
  );

  const dataSimpleConst = data.results.map((pokemon) => {
    const id = pokemon.url.split('/').at(-2);
    return {
      name: pokemon.name,
      id: id,
    }
  })

  // throw new Error('Method not implemented.');


  return dataSimpleConst;
}


const PokemonsPage = async () => {

  const pokemons = await getPokemons(151);

  return (
    <div className=' w-full h-screen  '>
      <h1>Get Pokemons</h1>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}

export default PokemonsPage;
