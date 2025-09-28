import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Box,
  Paper,
  Avatar,
  Chip,
  Divider,
  Stack,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useTheme,
  alpha
} from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Language, 
  AccountBalance, 
  LocalShipping,
  TrendingUp,
  Security,
  Support,
  Speed,
  Star,
  Favorite,
  LocationOn,
  AccessTime,
  Route,
  Brush,
  Diamond,
  Public,
  ArrowForward,
  CheckCircle,
  Business
} from '@mui/icons-material';
import HeroBanner from '../components/HeroBanner';
import CircleAnalytics from '../components/CircleAnalytics';

// Professional color palette
const colors = {
  primary: '#1e3a8a',
  secondary: '#1e40af',
  accent: '#059669',
  success: '#059669',
  warning: '#ea580c',
  error: '#dc2626',
  grey: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a'
  }
};

const modules = [
  {
    title: 'HIT Bazaar',
    description: 'Local marketplace with vendor management',
    path: '/bazaar',
    icon: <ShoppingCart sx={{ fontSize: 40 }} />,
    color: colors.primary,
    gradient: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)'
  },
  {
    title: 'HIT Global',
    description: 'International trade portal with compliance tools',
    path: '/global',
    icon: <Language sx={{ fontSize: 40 }} />,
    color: colors.success,
    gradient: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 100%)'
  },
  {
    title: 'HIT Wallet',
    description: 'Multi-currency payment processing and escrow',
    path: '/wallet',
    icon: <AccountBalance sx={{ fontSize: 40 }} />,
    color: colors.accent,
    gradient: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 100%)'
  },
  {
    title: 'HIT Freight',
    description: 'Smart logistics and delivery tracking',
    path: '/freight',
    icon: <LocalShipping sx={{ fontSize: 40 }} />,
    color: colors.warning,
    gradient: 'linear-gradient(135deg, #f57c00 0%, #ff9800 100%)'
  },
];

const features = [
  {
    icon: <TrendingUp sx={{ fontSize: 40 }} />,
    title: 'AI-Powered Insights',
    description: 'Advanced analytics and demand forecasting for better business decisions',
    color: colors.primary
  },
  {
    icon: <Security sx={{ fontSize: 40 }} />,
    title: 'Secure Transactions',
    description: 'End-to-end encryption and escrow services for safe trading',
    color: colors.success
  },
  {
    icon: <Support sx={{ fontSize: 40 }} />,
    title: '24/7 Support',
    description: 'Multi-language customer support available round the clock',
    color: '#4caf50'
  },
  {
    icon: <Speed sx={{ fontSize: 40 }} />,
    title: 'Fast Processing',
    description: 'Streamlined workflows for quick order processing and delivery',
    color: colors.warning
  }
];

const stats = [
  { label: 'Active Vendors', value: '2,500+', icon: <Business /> },
  { label: 'Products Listed', value: '50,000+', icon: <ShoppingCart /> },
  { label: 'Countries Served', value: '25+', icon: <Language /> },
  { label: 'Successful Trades', value: '100,000+', icon: <CheckCircle /> }
];

const afghanProducts = [
  {
    img: '/rug.png',
    title: 'Handmade Afghan Carpets',
    description: 'Traditional Persian-style rugs with intricate designs',
    price: '$200-2000',
    rating: 4.8,
    category: 'Textiles'
  },
  {
    img: '/pashmina.png',
    title: 'Pashmina Shawls',
    description: 'Luxurious cashmere shawls from the mountains',
    price: '$50-300',
    rating: 4.9,
    category: 'Textiles'
  },
  {
    img: '/saffron.jpg',
    title: 'Saffron & Spices',
    description: 'Premium Afghan saffron and traditional spices',
    price: '$20-150',
    rating: 4.7,
    category: 'Spices'
  },
  {
    img: '/Afghan jewellery set _ Afghan Jewellery Vintage Kuchi Choker Necklace, Kuchi Jewelry, Afghan Jewelry.jpg',
    title: 'Handcrafted Jewelry',
    description: 'Traditional Afghan jewelry with precious stones',
    price: '$100-500',
    rating: 4.6,
    category: 'Jewelry'
  },
  {
    img: '/fruitdry.jpg',
    title: 'Dried Fruits & Nuts',
    description: 'Premium Afghan dried fruits and nuts',
    price: '$15-100',
    rating: 4.8,
    category: 'Food'
  },
  {
    img: '/Handmade blue Afghan koza, Oriental wedding bowl, decorated matka pot, handmade Afghan pottery, decorated Afghan pottery vase.jpg',
    title: 'Traditional Pottery',
    description: 'Handcrafted clay pottery and ceramics',
    price: '$30-200',
    rating: 4.5,
    category: 'Pottery'
  }
];

const culturalHighlights = [
  {
    title: 'Silk Road Heritage',
    description: 'Afghanistan has been a crossroads of trade for centuries, connecting East and West along the ancient Silk Road.',
    icon: <Route sx={{ fontSize: 40 }} />,
    color: colors.primary
  },
  {
    title: 'Artisan Traditions',
    description: 'Generations of skilled artisans have preserved traditional crafting techniques passed down through families.',
    icon: <Brush sx={{ fontSize: 40 }} />,
    color: colors.accent
  },
  {
    title: 'Natural Resources',
    description: 'Rich in natural resources including precious stones, minerals, and agricultural products.',
    icon: <Diamond sx={{ fontSize: 40 }} />,
    color: colors.success
  },
  {
    title: 'Cultural Diversity',
    description: 'Home to diverse ethnic groups, each contributing unique cultural expressions and products.',
    icon: <Public sx={{ fontSize: 40 }} />,
    color: colors.warning
  }
];

const testimonials = [
  {
    name: 'Ahmad Karimi',
    role: 'Local Vendor',
    content: 'HIT Platform helped me expand my business beyond local markets. The payment system is reliable and secure.',
    avatar: 'AK',
    location: 'Kabul, Afghanistan',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'International Buyer',
    content: 'Finding authentic Afghan products has never been easier. The compliance tools make international trade seamless.',
    avatar: 'SJ',
    location: 'New York, USA',
    rating: 5
  },
  {
    name: 'Fatima Zahra',
    role: 'Carpet Artisan',
    content: 'Our family has been making carpets for generations. HIT Platform helps us reach customers worldwide.',
    avatar: 'FZ',
    location: 'Herat, Afghanistan',
    rating: 5
  }
];

export default function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: colors.grey[50] }}>
      <HeroBanner />
      <CircleAnalytics />

      {/* Cultural Heritage Section */}
      <Box sx={{ py: 10, mb: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography 
              variant="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                color: colors.primary,
                mb: 2
              }}
            >
              Afghanistan's Cultural Heritage
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              paragraph 
              sx={{ 
                mb: 6,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Centuries of tradition meet modern commerce
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {culturalHighlights.map((highlight, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card 
                  sx={{ 
                    height: '100%',
                    p: 4,
                    textAlign: 'center',
                    background: `linear-gradient(135deg, ${alpha(highlight.color, 0.05)} 0%, ${alpha(highlight.color, 0.1)} 100%)`,
                    border: `1px solid ${alpha(highlight.color, 0.1)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 8px 25px ${alpha(highlight.color, 0.2)}`,
                      border: `1px solid ${alpha(highlight.color, 0.3)}`
                    }
                  }}
                >
                  <Box sx={{ color: highlight.color, mb: 3 }}>
                    {highlight.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                    {highlight.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {highlight.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Carpet Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              color: colors.primary,
              mb: 2
            }}
          >
            The Art of Afghan Carpet Making
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            paragraph 
            sx={{ 
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Watch the traditional craftsmanship that goes into creating these beautiful handcrafted carpets
          </Typography>
        </Box>
        
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  mb: 4, 
                  fontWeight: 600,
                  color: colors.primary
                }}
              >
                Centuries of Tradition
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                Each carpet is handcrafted by skilled artisans using techniques passed down through generations. 
                The intricate patterns and vibrant colors tell stories of Afghan culture and heritage.
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                From the selection of premium wool and natural dyes to the final knotting process, 
                every step reflects the dedication and artistry of Afghan craftsmen.
              </Typography>
              <Stack spacing={2} sx={{ mb: 4 }}>
                {[
                  'Premium quality materials and traditional techniques',
                  'Unique designs inspired by Afghan culture and history',
                  'Handcrafted with attention to every detail'
                ].map((feature, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle sx={{ color: colors.success, mr: 2, fontSize: 20 }} />
                    <Typography variant="body1" color="text.secondary">
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Button 
                variant="contained" 
                component={Link} 
                to="/bazaar"
                size="large"
                endIcon={<ArrowForward />}
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  bgcolor: colors.accent,
                  '&:hover': {
                    bgcolor: alpha(colors.accent, 0.8),
                    transform: 'translateX(4px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Explore Our Carpet Collection
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              position: 'relative', 
              width: '100%',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: `0 10px 30px ${alpha(colors.primary, 0.2)}`,
              '&:hover': {
                boxShadow: `0 15px 40px ${alpha(colors.primary, 0.3)}`,
                transform: 'scale(1.02)',
                transition: 'all 0.3s ease'
              }
            }}>
              <img
                src="/carpet2.jpg"
                alt="Handcrafted Afghan Carpet"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Afghan Products */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              color: colors.primary,
              mb: 2
            }}
          >
            Featured Afghan Products
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            paragraph 
            sx={{ 
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Discover authentic handcrafted treasures from Afghanistan
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {afghanProducts.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%', 
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 30px ${alpha(colors.primary, 0.15)}`
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <img
                    src={product.img}
                    alt={product.title}
                    style={{ 
                      width: '100%', 
                      height: 250, 
                      objectFit: 'cover' 
                    }}
                  />
                  <Chip 
                    label={product.category}
                    size="small"
                    sx={{ 
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      bgcolor: alpha(colors.primary, 0.9),
                      color: 'white',
                      fontWeight: 600
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2, lineHeight: 1.6 }}>
                    {product.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Star sx={{ color: colors.accent, fontSize: 18, mr: 0.5 }} />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {product.rating}
                      </Typography>
                    </Box>
                    <Typography variant="h6" color={colors.primary} fontWeight="bold">
                      {product.price}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button 
                    variant="outlined" 
                    fullWidth
                    component={Link} 
                    to="/bazaar"
                    endIcon={<ArrowForward />}
                    sx={{ 
                      borderColor: colors.primary,
                      color: colors.primary,
                      '&:hover': {
                        bgcolor: colors.primary,
                        color: 'white',
                        transform: 'translateX(4px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: colors.primary, color: 'white', py: 10, mb: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item key={stat.label} xs={6} md={3}>
                <Box textAlign="center">
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mb: 2,
                    color: colors.accent
                  }}>
                    {stat.icon}
                  </Box>
                  <Typography 
                    variant="h3" 
                    component="div" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 1,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ bgcolor: colors.grey[100], py: 10, mb: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography 
              variant="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                color: colors.primary,
                mb: 2
              }}
            >
              Why Choose HIT Platform?
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              paragraph 
              sx={{ 
                mb: 6,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Advanced features designed for modern international trade
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card 
                  sx={{ 
                    height: '100%',
                    p: 4,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 30px ${alpha(feature.color, 0.15)}`,
                      border: `1px solid ${alpha(feature.color, 0.2)}`
                    }
                  }}
                >
                  <Box sx={{ color: feature.color, mb: 3 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              color: colors.primary,
              mb: 2
            }}
          >
            What Our Users Say
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            paragraph 
            sx={{ 
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Trusted by vendors and buyers worldwide
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 30px ${alpha(colors.primary, 0.15)}`
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar 
                    sx={{ 
                      mr: 3, 
                      bgcolor: colors.primary,
                      width: 56,
                      height: 56,
                      fontSize: '1.2rem',
                      fontWeight: 600
                    }}
                  >
                    {testimonial.avatar}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {testimonial.role}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
                      <Typography variant="caption" color="text.secondary">
                        {testimonial.location}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} sx={{ color: colors.accent, fontSize: 18 }} />
                  ))}
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6, fontStyle: 'italic' }}>
                  "{testimonial.content}"
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ 
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        color: 'white', 
        py: 10 
      }}>
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography 
              variant="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                mb: 3,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Ready to Start Trading?
            </Typography>
            <Typography 
              variant="h6" 
              paragraph 
              sx={{ 
                mb: 6,
                opacity: 0.9,
                lineHeight: 1.6
              }}
            >
              Join thousands of vendors and buyers already using HIT Platform
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              component={Link} 
              to="/register"
              endIcon={<ArrowForward />}
              sx={{ 
                px: 6, 
                py: 2,
                fontSize: '1.2rem',
                fontWeight: 600,
                bgcolor: colors.accent,
                '&:hover': {
                  bgcolor: alpha(colors.accent, 0.8),
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: `0 8px 25px ${alpha(colors.accent, 0.4)}`
                },
                transition: 'all 0.3s ease'
              }}
            >
              Create Account
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}