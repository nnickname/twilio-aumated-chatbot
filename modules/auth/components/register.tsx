'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SocialAuth from './social';
import { useRouter } from 'next/navigation';
const RegisterForm = ( ) => {
    const router = useRouter();
    return <Box

    width='100%'
    component="form"
    noValidate={true}
    autoComplete="on"
  > 
    <div className='content-center'>
        <TextField
            sx={{
                marginTop: '2rem'
            }}
            color='secondary'
            variant='outlined'
            fullWidth
            error={false}
            id="outlined-error-helper-text"
            label="Nombre completo"
        />
        <TextField
            type='email'
            sx={{
                marginTop: '1rem'
            }}
            color='secondary'
            variant='outlined'
            fullWidth
            error={false}
            id="outlined-error-helper-text"
            label="Correo electronico"
        />
        <TextField
            type='password'
            
            color='secondary'
            variant='outlined'
            sx={{mt: 2}}
            fullWidth
            error={false}
            id="outlined-error-helper-text"
            label="Contraseña"  
        />
        <a href="#" className="c-secondary fz-05">¿Olvidaste tu contraseña?.</a>
        <Button onClick={() => router.push('/dashboard')} variant="contained" fullWidth sx={{mt: 2}} color='primary'>Ingresar</Button>
        <SocialAuth/>
        
    </div>
    
  </Box>
}
export default RegisterForm;