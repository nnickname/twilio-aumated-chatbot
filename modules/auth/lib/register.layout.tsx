'use client';
import { Box } from '@mui/material';
import RegisterForm from '../components/register';

const RegisterLayout = () => {
    return <div>
        <h1 className="fz-2 c-primary mt-2">Bienvenido</h1>
        <span className="c-secondary">Registrate para continuar.</span>
        <RegisterForm/>            
    </div>
        
}
export default RegisterLayout;