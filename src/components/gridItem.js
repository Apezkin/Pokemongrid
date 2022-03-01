import React from "react";
import { PokemonSprite } from "./pokemonSprite";

export const GridItem = (props) => {
  const pokemon = props.pokemon;

  if (!pokemon) {
    return <div>No pokemon</div>;
  }

  return (
    <div>
      {pokemon && <div>{pokemon.name}</div>}
      <PokemonSprite pokemon={pokemon} />
    </div>
  );
};
