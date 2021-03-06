import React, { useEffect, useState } from "react";
import { GridItem } from "./gridItem";
import Grid from "@mui/material/Grid";
import "../App.css";

const defaultPokemonAmount = 20;

export const MainGrid = (props) => {
  useEffect(() => {
    props.createPokemonArray(defaultPokemonAmount);
  }, []);

  const [search, setSearch] = useState("");

  const searchPokemon = (event) => {
    event.preventDefault();
    if (search) {
      props.createPokemonArray(1, search.toLowerCase());
    } else {
      props.createPokemonArray(20, search);
    }
  };

  return (
    <div className="App">
      <div className="App">Pokemon grid</div>
      <form className="App" onSubmit={searchPokemon}>
        <label>
          Search:
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <input type="submit" value="Search" />
      </form>
      <Grid className="App" container spacing={{ xs: 2 }} columns={{ xs: 8 }}>
        {props.pokemonArray.map((pokemon, index) => (
          <Grid item xs={2} key={index}>
            <GridItem pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
