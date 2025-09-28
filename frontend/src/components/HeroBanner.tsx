import { Box, Typography, Button, Stack, IconButton, Tooltip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  const modules = [
    { name: 'Bazaar', icon: <ShoppingCartIcon />, path: '/bazaar' },
    { name: 'Global', icon: <LanguageIcon />, path: '/global' },
    { name: 'Wallet', icon: <AccountBalanceIcon />, path: '/wallet' },
    { name: 'Freight', icon: <LocalShippingIcon />, path: '/freight' },
  ];

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: { xs: '90vh', md: '100vh' },
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        color: 'common.white',
        backgroundImage: 'url(/pexels-mansour-ibrahim-218839-6050589.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        px: { xs: 4, md: 8 },
        pb: { xs: 8, md: 12 },
      }}
    >
      {/* Left Content - Main Title */}
      <Box sx={{ 
        position: 'relative', 
        zIndex: 2, 
        maxWidth: 600, 
        display: 'flex',
        alignItems: 'flex-start',
        height: 'fit-content'
      }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem', lg: '4.2rem' },
            lineHeight: 1.05,
            textAlign: 'left',
            fontFamily: 'inherit',
            whiteSpace: 'pre-line',
          }}
        >
          Hakimi International{'\n'}Trade (HIT)
        </Typography>
      </Box>

      {/* Right Content - Description and Buttons */}
      <Box sx={{ 
        position: 'relative', 
        zIndex: 2, 
        maxWidth: 500, 
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 'fit-content'
      }}>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.92)',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            lineHeight: 1.6,
            textAlign: 'left',
          }}
        >
          Connecting Afghanistan's domestic market with international buyers and sellers. Discover authentic products, seamless payments, and smart logistics—all in one platform.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" sx={{ width: '100%', mb: 4 }}>
          <Button
            variant="contained"
            size="medium"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 3,
              py: 1,
              borderRadius: 2,
              fontSize: '0.9rem',
              fontWeight: 600,
              textTransform: 'none',
              bgcolor: 'white',
              color: 'black',
              minWidth: '140px',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Start Trading
          </Button>
          <Button
            variant="outlined"
            size="medium"
            startIcon={<PlayArrowIcon />}
            sx={{
              px: 3,
              py: 1,
              borderRadius: 2,
              fontSize: '0.9rem',
              fontWeight: 600,
              textTransform: 'none',
              color: 'common.white',
              borderColor: 'rgba(255,255,255,0.8)',
              borderWidth: 2,
              minWidth: '140px',
              '&:hover': { 
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: 'white',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(255,255,255,0.2)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Explore Marketplace
          </Button>
        </Stack>

        {/* Module Icons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          {modules.map((module) => (
            <Tooltip key={module.name} title={module.name} placement="top">
              <IconButton
                component={Link}
                to={module.path}
                sx={{
                  width: 56,
                  height: 56,
                  bgcolor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-4px) scale(1.05)',
                    boxShadow: '0 8px 25px rgba(255,255,255,0.3)',
                    border: '1px solid rgba(255,255,255,0.4)',
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: '1.5rem',
                  }
                }}
              >
                {module.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner; 