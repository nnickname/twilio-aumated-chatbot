import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import IonIcon from '@reacticons/ionicons';
const SocialAuth = () => {
    return <Box textAlign='center' sx={{mt:2}}>
        <span className="fz-05 mt-1 c-secondary">o puedes ingresar con:</span>
        <br/>
        <Button disabled color='secondary' className="mt-1 mr-05" variant="contained" style={{padding: '.7rem'}}><IonIcon name="logo-facebook"/></Button>
        <Button className="mt-1 mr-05" variant="contained" style={{backgroundColor: '#DB4437', padding: '.7rem'}}><IonIcon name="logo-google"/></Button>
        <Button disabled color='secondary' className="mt-1" variant="contained" style={{ padding: '.7rem'}}><IonIcon name="logo-linkedin"/></Button>
    </Box>
}
export default SocialAuth;