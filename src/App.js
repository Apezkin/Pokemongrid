import "./App.css";
import React, { useState } from "react";
import { MainGrid } from "./components/mainGrid";
import { Routes, Route } from "react-router-dom";
import { Pokemon } from "./components/pokemon";
import { randomNumberGenerator } from "./utils/utils";

const POKEMONCOUNT = 800;

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);

  const createPokemonArray = async (pokemonAmount, searchPokemon) => {
    setPokemonArray([]);
    const pokemons = [];
    for (let i = 0; i < pokemonAmount; i++) {
      const pokemon = await fetchPokemon(searchPokemon);
      pokemons.push(pokemon);
    }
    setPokemonArray(pokemons);
  };

  const fetchPokemon = async (pokemon) => {
    let data, url, randomPokemon;
    if (!pokemon) {
      randomPokemon = randomNumberGenerator(1, POKEMONCOUNT);
      url = "https://pokeapi.co/api/v2/pokemon/" + randomPokemon;
    } else {
      url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    }
    data = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
    return data;
  };

  return (
    <Routes>
      <Route
        path="/Pokemongrid"
        exact
        element={
          <MainGrid
            pokemonArray={pokemonArray}
            createPokemonArray={createPokemonArray}
          />
        }
      />
      <Route
        path="/Pokemongrid/pokemon/:id"
        element={<Pokemon pokemonArray={pokemonArray} />}
      />
    </Routes>
  );
}

export default App;
