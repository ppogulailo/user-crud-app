import { useNavigate, useParams } from 'react-router-dom';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, ButtonGroup, Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { pink } from '@mui/material/colors';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { getUser } from '../../redux/store/users/users-selector';
import { ColorButton } from '../material/searchAppBar';

const UserCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = useTypeSelector(getUser(Number(id)));

  const prevItem = () => {
    navigate(`/user/${Number(id) - 1}`);
  };
  const nextItem = () => {
    navigate(`/user/${Number(id) + 1}`);
  };
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ba000d',
      },
    },
  });
  if (user != null) {
    return (
            <>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                    <ThemeProvider theme={darkTheme}>
                        <AppBar position="static" color="primary" enableColorOnDark>
                        </AppBar>
                        <AppBar position="static" color="primary">
                            <Button onClick={() => {
                              navigate('/main');
                            }}>
                                Go UserComponent
                            </Button>
                        </AppBar>
                    </ThemeProvider>
                </Stack>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                          marginTop: 8,
                          display: 'flex',
                          flexDirection: 'column',
                          backgroundColor: '#bdbdbd',
                          borderRadius: 10,
                          alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: pink[500] }}>
                            <AccountCircleIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h4">
                            {user.username}
                        </Typography>
                        <Typography component="h6" variant="h6">
                            Name: {user.name}
                        </Typography>
                        <Typography component="h6" variant="h6">
                            City:{user.address.city}
                        </Typography>
                        <Typography component="h1" variant="h6">
                            Company: {user.company.name}
                        </Typography>
                        <Typography component="h1" variant="h6">
                            Email: {user.email}
                        </Typography>
                        <Typography component="h1" variant="h6">
                            Website: {user.website}
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }}>

                            <Grid container spacing={10}>
                                <Grid item xs={6}>
                                    <ColorButton fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={prevItem}>
                                        Prev
                                    </ColorButton>
                                </Grid>
                                <Grid item xs={6}>
                                    <ColorButton fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={nextItem}>
                                        Next
                                    </ColorButton>
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                </Container>
            </>
    );
  }
  return (
            <>
                <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      minHeight: '100vh',
                    }}
                >
                    <Typography variant="h1">
                        404
                    </Typography>
                    <Typography variant="h6">
                        User not Found
                    </Typography>
                    <ButtonGroup
                        disableElevation
                        variant="contained"
                        aria-label="Disabled elevation buttons"
                    >
                        <ColorButton variant="contained" sx={{ mt: 3, mb: 2 }} onClick={prevItem}>
                            Prev
                        </ColorButton>
                        <ColorButton variant="contained" sx={{ mt: 3, mb: 2 }} onClick={nextItem}>
                            Next
                        </ColorButton>
                    </ButtonGroup>
                    <ColorButton variant="contained" onClick={() => navigate('/main')}>
                       Home
                    </ColorButton>
                </Box>
            </>
  );
};

export default UserCard;
