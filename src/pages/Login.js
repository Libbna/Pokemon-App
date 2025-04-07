import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Set auth state and save token
    navigate('/pokemon-list'); // Redirect after login
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Login Page</h2>
      <button onClick={handleLogin} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </div>
  );
};

export default Login;