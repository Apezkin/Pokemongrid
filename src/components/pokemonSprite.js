import React from "react";
import { NavLink } from "react-router-dom";

export const PokemonSprite = (props) => {
  const pokemon = props.pokemon;

  if (!pokemon) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <NavLink to={`/pokemon/${pokemon.id}`}>
        <a href="">
          <img src={pokemon.sprites.front_default} />
        </a>
      </NavLink>
    </div>
  );
};
