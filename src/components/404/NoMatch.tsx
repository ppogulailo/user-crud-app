import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import {useNavigate} from "react-router-dom";

const primary = red[500]; // #f44336

export default function NoMatch() {
    const navigate = useNavigate();
    return (
        <Box
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
            <Button variant="contained" onClick={() => navigate(`/main`)}>Home</Button>
        </Box>
    );
}
