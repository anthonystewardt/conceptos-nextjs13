import { PokemonI, PokemonResponse } from "@/interfaces/pokemons";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    name: string;
  };
}

// gsp
export async function generateStaticParams() {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`).then((res) => res.json());
  const staticPokemons = data.results.map((pokemon) => ({ name: pokemon.name }));
  return staticPokemons.map(({name}) => ({
    name,
  }));
}

// [{id: 1}, {id: 2}, {id: 3}]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id, name } = await getPokemonByName(params.name);

    return {
      title: `Pokemon ${id} - ${name}`,
      description: `Pokemon ${name} description`,
    };
  } catch (error) {
    return {
      title: "Pokemon not found",
      description: "Pokemon not found",
    };
  }
}

const getPokemonByName = async (name: string): Promise<PokemonI> => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      next: {
        revalidate: 60 * 60 * 30 * 6,
      },
    });
    const pokemon: PokemonI = await data.json();
    // console.log({pokemon})
    return pokemon;
  } catch (error) {
    notFound();
  }
};

export default async function PokemonIdPage({ params }: Props) {
  const pokemon = await getPokemonByName(params.name);
  console.log(params)

  return (
    <div className="flex  flex-col items-center w-full  text-slate-800 max-h-screen">
      <div className="h-full flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ""}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5"
            />

            <div className="flex flex-wrap h-[200px] overflow-y-auto">
              {pokemon.moves.map((move) => (
                <p key={move.move.name} className="mr-2 capitalize">
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
