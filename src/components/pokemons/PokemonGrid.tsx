"use client";
import { SimplePokemon } from '@/interfaces/pokemons';
import Image from 'next/image';
import React from 'react';
import { PokemonCard } from '..';
import { useAppSelector } from '@/store';


interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {


  return (
    <div className="grid grid-cols-6 gap-4  w-full h-full overflow-auto ">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}

