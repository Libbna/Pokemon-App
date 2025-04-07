// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import PokemonList from './pages/PokemonList';
import Header from './components/Header';
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/pokemon-list/*"
            element={
              <ProtectedRoute>
                <PokemonList />
              </ProtectedRoute>
            }
          />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
