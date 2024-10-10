import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSigIn, startsLoginWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";

const formData = {
    email: '',
    password: ''
};

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm( formData );

    const isAuthenticated = useMemo(()=> status === 'checking', [ status ]);

    const onSubmit = ( event )=>{
        event.preventDefault();
        
        dispatch( startsLoginWithEmailPassword({email, password}) );
    }

    const onGoogleSigIn = ()=>{
        dispatch( startGoogleSigIn() );
        console.log('onGoogleSigIn');
    }

  return (
    <AuthLayout title='Login'>
        <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
            <Grid 
                container>
                    <Grid
                        item
                        xs={12}
                        sx={{mt: 2}}>
                            <TextField 
                                label="Correo"
                                type="email"
                                placeholder="username@domain.com"
                                fullWidth
                                name="email"
                                value={ email }
                                onChange={ onInputChange } />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{mt: 2}}>
                            <TextField 
                                label="Password"
                                type="password"
                                placeholder="fldsk'23¿"
                                fullWidth 
                                name="password"
                                value={ password }
                                onChange={ onInputChange }/>
                    </Grid>
                    <Grid container>
                    <Grid item xs={12} display={ !!errorMessage ? '': 'none' }>
                            <Alert severity="error">{ errorMessage }</Alert>
                        </Grid>
                    </Grid>
                    <Grid container spacing={ 2 } sx={{mb: 1, mt:1}}>
                        <Grid item xs={12} sm={ 6 }>
                            <Button
                                disabled={ isAuthenticated } 
                                variant="contained" 
                                fullWidth 
                                type="submit">Login</Button>
                        </Grid>
                        <Grid item xs={12} sm={ 6 }>
                            <Button 
                            disabled={ isAuthenticated }
                            variant="contained" 
                            fullWidth 
                            onClick={ ()=> onGoogleSigIn() }>
                                <Google/>
                                <Typography sx={{ml: 1}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction={'row'} justifyContent={'end'}>
                        <Link 
                            component={ RouterLink } 
                            to='/auth/register'>
                                Create a count
                        </Link>
                    </Grid> 
            </Grid>
        </form>
    </AuthLayout>
  )
}
