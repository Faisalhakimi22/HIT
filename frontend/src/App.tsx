import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModernNavbar from './components/ModernNavbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import BazaarHome from './pages/BazaarHome';
import GlobalPortal from './pages/GlobalPortal';
import WalletDashboard from './pages/WalletDashboard';
import FreightDashboard from './pages/FreightDashboard';
import Home from './pages/Home';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ModernNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bazaar" element={<BazaarHome />} />
          <Route path="/global" element={<GlobalPortal />} />
          <Route path="/wallet" element={<WalletDashboard />} />
          <Route path="/freight" element={<FreightDashboard />} />
          {/* Example of protected route */}
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <div>Protected Content</div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App; 