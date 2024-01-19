"use client";
import { useAppSelector } from '@/store';
import React from 'react';
import { PokemonGrid } from '..';

const FavoriteShow = () => {
  const pokemons =  useAppSelector((state) => state.pokemons);
  const pokemonsArray = Object.values(pokemons);

  return (
      <PokemonGrid pokemons={pokemonsArray} />
  );
}

export default FavoriteShow;
