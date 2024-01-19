import { PokemonGrid } from "@/components";
import FavoriteShow from "@/components/pokemons/FavoriteShow";

export default function FavoritePage() {
  return (
    <div>
      <div className="">
        <h1>Pokemones Favoritos</h1>
      </div>
      {/* <PokemonGrid pokemons={[]} /> */}
      <FavoriteShow />
    </div>
  );
}