import React from 'react';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { ColorButton } from '../material/searchAppBar';

export default function NoMatch() {
  const primary = grey[500];
  const navigate = useNavigate();
  return (
        <Box
            data-testid="not-found-page"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              minHeight: '100vh',
              backgroundColor: primary,
            }}
        >
            <Typography variant="h1" style={{ color: 'white' }}>
                404
            </Typography>
            <Typography variant="h6" style={{ color: 'white' }}>
                The page you’re looking for doesn’t exist.
            </Typography>
            <ColorButton variant="contained" onClick={() => navigate('main')}>Home</ColorButton>
        </Box>
  );
}
