import React from "react";
import "./App.css";
import { getPokemonInfo } from "./services/PokemonApiServices";

function App() {
  //the data is sending
  //going to replace with use effect
  getPokemonInfo().then((data) => {
    console.log(data);
  });
  return <div className="App"></div>;
}

export default App;
