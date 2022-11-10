import {useState, useEffect, useLayoutEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getUser} from "../redux/store/users/users-selector";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useTypeSelector} from "../hooks/useTypeSelector";
import {CircularProgress} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const UserCard=()=> {
    const navigate = useNavigate();
    const {id} = useParams();
    const user = useTypeSelector(getUser(Number(id)));
    const [state,setState]=useState(false)

    useEffect(()=>{
        console.log(user)
        if(!user&&state){
            navigate(`/user/${Number(id)+1}`)
        }else if (!user&&!state){
            navigate(`/user/${Number(id)-1}`)
        }
    },[user,id]);

    if(user){
        const prevItem=()=>{
            setState(false)
            navigate(`/user/${user.id-1}`)
        }
        const nextItem=()=>{
            setState(true)
            navigate(`/user/${user.id+1}`)
        }
        return (

                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <AccountCircleIcon />
                        </Avatar>
                        <Typography component="h1" variant="h4">
                            {user.username}
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={2}>
                                <Typography component="h1" variant="h6">
                                  City:
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography component="h6" variant="h6">
                                    {user.address.city}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography component="h1" variant="h6">
                                    Company :
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography component="h1" variant="h6">
                                    {user.name}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Box component="form"  noValidate sx={{ mt: 1 }}>

                            <Grid container spacing={10}>
                                <Grid item xs={6}>
                                        <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}  onClick={prevItem}>
                                            Prev
                                        </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}  onClick={nextItem}>
                                        Next
                                    </Button>
                                </Grid>
                            </Grid>

                        </Box>
                    </Box>
                </Container>

        );
    }
    else {
        return  (
            <Box sx={{ display: 'flex'}}>
                <CircularProgress />
            </Box>
        )
    }

}

export default UserCard;
