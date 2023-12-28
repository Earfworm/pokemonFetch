import { useEffect, useState } from "react";
import "./PokemonQueryRequest.css";
import { getPokemonInfo } from "../services/PokemonApiServices";
import { Pokemon } from "../models/Pokemon";

const [allPokemonInfo, setAllPokemonInfo] = useState<Pokemon>();

useEffect(() => {
  getPokemonInfo().then((data) => console.log(data));
}, []);
const PokemonQueryRequest = () => {
  return (
    <form className="PokemonQueryRequest">
      PokemonQueryRequest works
      <input type="text" name="pokeSearch" id="pokeSearch" />
    </form>
  );
};

export default PokemonQueryRequest;
