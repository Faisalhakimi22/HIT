import { Box, Container, Typography } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const images = [
  '/rug.png',
  '/pashmina.png',
  '/Afghan jewelry 🇦🇫.jpg',
  '/handcraft jewelleryjpg.jpg'
];

const circleVariants = [
  {
    initial: { opacity: 0, scale: 0.7, x: -120 },
    animate: { opacity: 1, scale: 1, x: 0 }
  },
  {
    initial: { opacity: 0, scale: 0.7, y: -120 },
    animate: { opacity: 1, scale: 1, y: 0 }
  },
  {
    initial: { opacity: 0, scale: 0.7, y: 120 },
    animate: { opacity: 1, scale: 1, y: 0 }
  },
  {
    initial: { opacity: 0, scale: 0.7, x: 120 },
    animate: { opacity: 1, scale: 1, x: 0 }
  }
];

const overlap = {
  xs: -10,
  sm: -25,
  md: -50
};

const CircleAnalytics = () => {
  const ref = useRef(null);
  // Remove 'once: true' so it triggers every time in view
  const inView = useInView(ref, { margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [inView, controls]);

  return (
    <Box sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography variant="h3" align="center" fontWeight={300} sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
          Analytics that feels like it’s from the future
        </Typography>

        {/* Overlapping Circle Row with Animation */}
        <Box
          ref={ref}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: overlap.xs, sm: overlap.sm, md: overlap.md },
            py: { xs: 4, md: 6 },
            flexWrap: 'nowrap',
            position: 'relative',
            zIndex: 1
          }}
        >
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={circleVariants[idx].initial}
              animate={controls}
              variants={{ animate: circleVariants[idx].animate, initial: circleVariants[idx].initial }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.15, type: 'spring' }}
              style={{
                zIndex: idx + 1, // Reverse stacking order
                marginRight: idx !== images.length - 1 ? overlap.md : 0 // Overlap from right to left
              }}
            >
              <Box
                sx={{
                  width: { xs: 200, sm: 280, md: 380 },
                  height: { xs: 200, sm: 280, md: 380 },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: 6,
                  background: '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <img
                  src={src}
                  alt={`Highlight ${idx + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CircleAnalytics; 