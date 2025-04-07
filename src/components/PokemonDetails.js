import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";

function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load Pokémon:', err);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (!pokemon) return <p>No Pokémon data.</p>;


  return (
    <div className="p-6">
      <Helmet>
        <title>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</title>
      </Helmet>
      <h2 className="text-2xl font-bold">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="my-4" />
      <h3 className="text-lg font-semibold">Abilities:</h3>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetails;
