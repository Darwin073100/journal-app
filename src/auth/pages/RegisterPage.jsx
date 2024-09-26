import { Button, Grid, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Google } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-router-dom"

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
        <form>
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
                                fullWidth />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{mt: 2}}>
                            <TextField 
                                label="Correo"
                                type="email"
                                placeholder="username@domain.com"
                                fullWidth />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{mt: 2}}>
                            <TextField 
                                label="Password"
                                type="password"
                                placeholder="fldsk'23¿"
                                fullWidth />
                    </Grid>
                    <Grid container spacing={ 2 } sx={{mb: 1, mt:1}}>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>Register</Button>
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
