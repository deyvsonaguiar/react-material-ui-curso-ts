import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {

  const { toggleDrawerOpen, setDrawerOptions } = useAppDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial',
      },
    ]);
  }, []);
  
  return (
    <Routes>
      <Route path="/pagina-inicial" 
        element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toogle Drawer</Button> } 
      />
      {/** <Route path="*" element={<Navigate to="/pagina-inicial" />} /> */}
    </Routes>
  );
};