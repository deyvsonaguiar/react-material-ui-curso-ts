/* eslint-disable linebreak-style */
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'

interface IMenuLateralProps {
  children: React.ReactNode
}

// eslint-disable-next-line react/prop-types
export const MenuLateral: React.FC<IMenuLateralProps> = ( { children } ) => {

  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
            <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav" >
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}