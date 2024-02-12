import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages';
import { useAppDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {

  const { setDrawerOptions } = useAppDrawerContext()

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
        element={<Dashboard />} 
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};