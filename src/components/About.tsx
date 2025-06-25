import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'var(--color-primary-dark)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 6,
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                color: 'var(--color-secondary)',
              }}
            >
              About Beckohn Digital
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: 'var(--color-text-light)',
              }}
            >
              We're two passionate graduate developers who discovered our love for design and web development, bringing fresh ideas and creative energy to every project.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: 'var(--color-text-light)',
                lineHeight: 1.8,
              }}
            >
              Founded by Freddie Kohn and Peter Beck, Beckohn Digital was born from our shared passion for creating exceptional digital experiences. We believe that a great website is more than just code – it's a powerful tool that can transform your business. Our fresh perspective and enthusiasm for experimenting with innovative designs allows us to deliver websites that not only look stunning but also drive real results.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--color-text-light)',
                lineHeight: 1.8,
              }}
            >
              As recent graduates with a modern understanding of the latest technologies and design trends, we're committed to helping businesses of all sizes establish a strong online presence and achieve their digital goals through creative and cutting-edge solutions.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                  border: '5px solid',
                  borderColor: 'var(--color-primary)',
                  backgroundColor: 'var(--color-bg-dark)',
                  zIndex: 0,
                },
              }}
            >
              <Box
                component="img"
                src="/about-image.jpg"
                alt="Team working on web development"
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 