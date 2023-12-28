import { useEffect, useState } from "react";
import "./PokemonQueryRequest.css";
import { getPokemonInfo } from "../services/PokemonApiServices";
import { Pokemon } from "../models/Pokemon";

const [allPokemonInfo, setAllPokemonInfo] = useState<Pokemon>();

useEffect(() => {
  getPokemonInfo().then((data) => console.log(data));
}, []);
const PokemonQueryRequest = () => {
  return <div className="PokemonQueryRequest">PokemonQueryRequest works</div>;
};

export default PokemonQueryRequest;
