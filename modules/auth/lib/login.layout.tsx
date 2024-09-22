'use client';
import LoginForm from '../components/login';
const LoginLayout = () => {
    return <div>
        <h1 className="fz-2 c-primary mt-2">Bienvenido</h1>
        <span className="c-secondary">Inicia sesión para continuar.</span>
        <LoginForm/>            
    </div>
        
}
export default LoginLayout;