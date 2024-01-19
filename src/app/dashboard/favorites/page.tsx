import { PokemonGrid } from "@/components";

export default function FavoritePage() {
  return (
    <div>
      <div className="">
        <h1>Pokemones Favoritos</h1>
      </div>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}