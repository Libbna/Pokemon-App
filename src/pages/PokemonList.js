// src/pages/PokemonList.js
import Sidebar from '../components/Sidebar';
import PokemonDetails from '../components/PokemonDetails';
import { Routes, Route } from 'react-router';

const PokemonList = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-3/4 p-6">
        <Routes>
          {/* <Route path="/pokemon/:name" element={<PokemonDetails />} /> */}
          <Route path="" element={<p>Select a Pokémon from the list.</p>} />
        </Routes>
      </div>
    </div>
  );
};

export default PokemonList;
