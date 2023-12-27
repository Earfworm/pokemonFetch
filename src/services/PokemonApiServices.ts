import axios from "axios";
import { Pokemon } from "../models/Pokemon";

export const getPokemonInfo = (): Promise<Pokemon> => {
  return axios
    .get("https://ex.traction.one/pokedex/pokemon/", {
      headers: {
        "User-Agent": "PokemonFetch (http://localhost:3000, v1.0)",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
    });
};
