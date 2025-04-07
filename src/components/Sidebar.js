import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

function Sidebar() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <div className="w-1/4 p-4 bg-gray-200 h-screen overflow-auto">
      <h2 className="text-xl font-bold mb-4">Pokémon List</h2>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index} className="mb-2">
            <Link to={`/pokemon/${pokemon.name}`} className="text-blue-600 hover:underline">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
