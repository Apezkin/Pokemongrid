import React from "react";
import { Link, useParams } from "react-router-dom";
import { PokemonSprite } from "./pokemonSprite";

export const Pokemon = (props) => {
  const params = useParams();
  let pokemon;
  console.log(props.pokemonArray);

  for (let i = 0; i < props.pokemonArray.length; i++) {
    if (params.id == props.pokemonArray[i].id) {
      pokemon = props.pokemonArray[i];
      break;
    }
  }

  if (!pokemon) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <li>
        <Link to="/">Back</Link>
      </li>
      {pokemon && <div>{pokemon.name}</div>}
      <PokemonSprite pokemon={pokemon} />
      <div>hp: {pokemon.stats[0].base_stat}</div>
      <div>attack: {pokemon.stats[1].base_stat}</div>
      <div>defense: {pokemon.stats[2].base_stat}</div>
      <div>special attack: {pokemon.stats[3].base_stat}</div>
      <div>special defense: {pokemon.stats[4].base_stat}</div>
      <div>speed: {pokemon.stats[5].base_stat}</div>
      <div>#####</div>
      <div>abilities:</div>
      {pokemon.abilities.map((ability) => (
        <div>{ability.ability.name}</div>
      ))}
    </div>
  );
};
