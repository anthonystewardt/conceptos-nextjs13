import { SimplePokemon } from '@/interfaces/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PokemonState {
  [key: string]: SimplePokemon
}

const initialState: PokemonState = {
  "1": {
    id: "1",
    name: "bulbasaur",
  },
  "2": {
    id: "2",
    name: "ivysaur",
  }
}

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    togglePokemon: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id, name } = pokemon;
      if (!!state[id!]) {
        delete state[id!]
        return;
      } else {
        state[id!] = pokemon
      }
    }

  }
});

export const { togglePokemon } = pokemonSlice.actions

export default pokemonSlice.reducer