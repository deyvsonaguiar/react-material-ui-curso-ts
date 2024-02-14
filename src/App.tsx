import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral'
import { AppDrawerProvider } from './shared/contexts'
import { AppThemeProvider } from './shared/contexts/ThemeContext'

export const App = () => {
  return (
    <AppThemeProvider>
      <AppDrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </AppDrawerProvider>
    </AppThemeProvider>
  )
}
