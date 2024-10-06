import { Alert, Button, Grid, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Google } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-router-dom"
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
    displayName: '',
    email: '',
    password: ''
};

const formValidations = {
    email: [( value )=> value.includes('@'), 'El correo debe tener un @.'],
    password: [( value )=> value.length >= 6, 'El password debe contener más de 6 caracteres.'],
    displayName: [( value )=> value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false)

    const { status, errorMessage } = useSelector( state => state.auth );

    const isCheckingAuthentication = useMemo( ()=> status === 'checking', [status]);

    const { 
        displayName, email, password, onInputChange, formState, 
        isFormValid, displayNameValid, emailValid, passwordValid,
    } = useForm( formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        
        setFormSubmitted( true );
        
        if( !isFormValid ) return ;
         
        dispatch( startCreatingUserWithEmailPassword( formState ) );
    }

  return (
    <AuthLayout title='Register'>
        <h1>FormValid { isFormValid ? 'Valido': 'Incorecto'} </h1>
        <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
            <Grid 
                container>
                    <Grid
                        item
                        xs={12}
                        sx={{mt: 2}}>
                            <TextField 
                                label="Full name"
                                type="text"
                                placeholder="Alex fake"
                                fullWidth 
                                value={ displayName }
                                name="displayName"
                                onChange={ onInputChange }
                                error={ !!displayNameValid && formSubmitted }
                                helperText={ displayNameValid }/>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{mt: 2}}>
                            <TextField 
                                label="Correo"
                                type="email"
                                placeholder="username@domain.com"
                                fullWidth 
                                value={ email }
                                name="email"
                                onChange={ onInputChange }
                                error={ !!emailValid && formSubmitted }
                                helperText={ emailValid }/>
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
                                value={ password }
                                name="password"
                                onChange={ onInputChange }
                                error={ !!passwordValid && formSubmitted  }
                                helperText={ passwordValid } />
                    </Grid>
                    <Grid container spacing={ 2 } sx={{mb: 1, mt:1}}>
                        <Grid item xs={12} display={ !!errorMessage ? '': 'none' }>
                            <Alert severity="error">{ errorMessage }</Alert>
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                                variant="contained" 
                                fullWidth
                                type='submit'
                                disabled={ isCheckingAuthentication } 
                                >Register</Button>
                        </Grid>
                    
                    </Grid>
                    <Grid container direction={'row'} justifyContent={'end'}>
                        <Link
                            component={ RouterLink } 
                            to='/auth/login'>
                                Login
                        </Link>
                    </Grid> 
            </Grid>
        </form>
    </AuthLayout>
  )
}
