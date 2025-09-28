import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  alpha,
  Slide,
  useScrollTrigger
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ShoppingCart,
  Language,
  AccountBalance,
  LocalShipping
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

interface ModernNavbarProps {
}

const ModernNavbar: React.FC<ModernNavbarProps> = () => {
  const theme = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasScrolled(scrollTop > 50);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Bazaar', path: '/bazaar', icon: <ShoppingCart /> },
    { name: 'Global', path: '/global', icon: <Language /> },
    { name: 'Wallet', path: '/wallet', icon: <AccountBalance /> },
    { name: 'Freight', path: '/freight', icon: <LocalShipping /> },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e3a8a' }}>
          HIT Platform
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} component={Link} to={item.path}>
            <ListItemText 
              primary={item.name} 
              sx={{ 
                textAlign: 'center',
                '& .MuiTypography-root': {
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  color: location.pathname === item.path ? '#059669' : '#1e3a8a'
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = typeof window !== 'undefined' ? () => window.document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          background: hasScrolled 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'transparent',
          backdropFilter: hasScrolled ? 'blur(20px)' : 'none',
          boxShadow: hasScrolled 
            ? '0 4px 30px rgba(0, 0, 0, 0.1)' 
            : 'none',
          borderBottom: hasScrolled 
            ? '1px solid rgba(255, 255, 255, 0.2)' 
            : 'none',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          position: 'fixed',
          top: 0,
          zIndex: 1100,
          borderRadius: hasScrolled 
            ? { xs: 0, md: '0 0 20px 20px' } 
            : 0,
          mx: hasScrolled ? { xs: 0, md: 2 } : 0,
          mt: hasScrolled ? { xs: 0, md: 2 } : 0,
          maxWidth: hasScrolled 
            ? { md: 'calc(100% - 32px)' } 
            : '100%',
        }}
      >
          <Container maxWidth="lg">
            <Toolbar sx={{ 
              minHeight: 70,
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}>
              {/* Logo */}
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  flexGrow: 1,
                  fontWeight: 800,
                  fontSize: '1.6rem',
                  color: '#1e3a8a',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                HIT Platform
              </Typography>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: '#1e3a8a',
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      fontSize: '0.9rem',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        background: 'rgba(30, 58, 138, 0.1)',
                        transform: 'translateY(-1px)'
                      },
                      ...(location.pathname === item.path && {
                        background: 'rgba(30, 58, 138, 0.15)',
                        color: '#1e3a8a'
                      })
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>

              {/* CTA Buttons */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, ml: 3 }}>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/login"
                  sx={{
                    color: '#1e3a8a',
                    borderColor: 'rgba(30, 58, 138, 0.5)',
                    borderRadius: 2,
                    px: 2.5,
                    py: 0.8,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      borderColor: '#1e3a8a',
                      background: 'rgba(30, 58, 138, 0.1)',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  to="/register"
                  sx={{
                    background: 'linear-gradient(45deg, #1e3a8a 0%, #1e40af 100%)',
                    color: 'white',
                    borderRadius: 2,
                    px: 2.5,
                    py: 0.8,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 15px rgba(30, 58, 138, 0.3)',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1e40af 0%, #1e3a8a 100%)',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 6px 20px rgba(30, 58, 138, 0.4)'
                    }
                  }}
                >
                  Get Started
                </Button>
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  display: { md: 'none' },
                  color: '#1e3a8a'
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 280,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default ModernNavbar;