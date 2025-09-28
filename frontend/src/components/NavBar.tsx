import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function NavBar() {
  const { user, logout } = useAuth();
  return (
    <AppBar 
      position="static" 
      sx={{ 
        bgcolor: 'white',
        color: 'black',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Toolbar>
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
          <Button 
            sx={{ color: 'black', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }} 
            component={Link} 
            to="/"
          >
            Home
          </Button>
          <Button 
            sx={{ color: 'black', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }} 
            component={Link} 
            to="/products"
          >
            Products
          </Button>
          <Button 
            sx={{ color: 'black', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }} 
            component={Link} 
            to="/bazaar"
          >
            Bazaar
          </Button>
          <Button 
            sx={{ color: 'black', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }} 
            component={Link} 
            to="/global"
          >
            Global
          </Button>
          <Button 
            sx={{ color: 'black', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }} 
            component={Link} 
            to="/wallet"
          >
            Wallet
          </Button>
          <Button 
            sx={{ color: 'black', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }} 
            component={Link} 
            to="/freight"
          >
            Freight
          </Button>
        </Stack>
        {user ? (
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body1" sx={{ color: 'black' }}>{user.name}</Typography>
            <Button 
              sx={{ color: 'black', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }} 
              onClick={logout}
            >
              Logout
            </Button>
          </Stack>
        ) : (
          <Stack direction="row" spacing={2}>
            <Button 
              sx={{ color: 'black', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }} 
              component={Link} 
              to="/login"
            >
              Login
            </Button>
            <Button 
              sx={{ color: 'black', '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } }} 
              component={Link} 
              to="/register"
            >
              Register
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
} 