import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import PokemonDetails from "./components/PokemonDetails";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="w-3/4 p-6">
          <Routes>
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
            <Route path="/" element={<p>Select a Pokémon from the list.</p>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
