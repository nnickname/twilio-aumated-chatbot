'use client';
import LoginLayout from '@/modules/auth/lib/login.layout';
import RegisterLayout from '@/modules/auth/lib/register.layout';
import { Box, Skeleton } from '@mui/material';
import Modal from '@mui/material/Modal';
import LogoRevizora from '@/public/brand/logo_primary.png';
import { useState } from 'react';
import SideBarLayout from '@/modules/sidebar/lib/sidebar.layout';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 450,
    minWidth: 300,
    bgcolor: 'white',
    border: '0px solid #000',
    boxShadow: 24,
    p: 3,
    outline: 'none',
    borderRadius: '.5rem'
};
const IndexLayout = () => {
  const [modalSelected, setSelectedModal] = useState<string>('login');
  return (<div>
      <SideBarLayout sideBarChildren={
        <div>
            <Skeleton variant="rectangular" width='100%' height='500px' />
        </div>
      }/>
      <Modal
          open={true}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
            {modalSelected === 'login' ? <LoginLayout/> : <RegisterLayout/>}
            <Box className="mt-2" display='flex' justifyContent='center'>
              <p className="c-secondary mr-05">{modalSelected === 'login' ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}</p>
              <a href='#' onClick={() => setSelectedModal(modalSelected === 'login' ? 'register' : 'login')} className="c-primary">{modalSelected === 'login' ? 'prueba gratis' : 'inicia ahora'}</a>
            </Box>
          </Box>
      </Modal>
  </div>
  );
}

export default IndexLayout;