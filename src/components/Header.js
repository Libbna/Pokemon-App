// src/components/Header.js
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/pokemon-list');
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
      <h1 className="text-xl font-bold">Pokémon App</h1>
      <div>
        {isAuthenticated ? (
          <>
            <Link to="/pokemon-list" className="mr-4 text-blue-600">Pokémon List</Link>
            <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-blue-500 text-white px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
