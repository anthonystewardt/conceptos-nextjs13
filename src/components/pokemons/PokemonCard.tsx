import { SimplePokemon } from '@/interfaces/pokemons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}


export const PokemonCard = ({pokemon}: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4" key={pokemon.id}>
      <div className="flex items-center justify-center">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
          width={96}
          height={96}
          priority={false}
        />
      </div>
      <div className="flex justify-center">
        <Link
          href={`/dashboard/pokemon/${pokemon.id}`}
          className="px-4 text-xs py-1 hover:bg-gray-800 hover:text-white text-gray-700 font-semibold rounded-lg border-2 border-gray-800 hover:border-gray-950 transition ease"
        >
          Leer más
        </Link>
      </div>
      <div className="flex justify-center my-2">
        <Link
          href={`/dashboard/pokemon/name/${pokemon.name}`}
          className="px-4 text-xs py-1 hover:bg-gray-800 hover:text-white text-gray-700 font-semibold rounded-lg border-2 border-gray-800 hover:border-gray-950 transition ease"
        >
          Leer más por nombre
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-blue-500">{pokemon.name}</h1>
        <IoHeartOutline className="text-red-500" />
      </div>
    </div>
  );
}


