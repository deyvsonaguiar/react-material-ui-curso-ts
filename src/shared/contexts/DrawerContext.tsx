import React, { createContext, useCallback, useContext, useState } from 'react'

interface IDrawerOption {
  icon: string
  path: string
  label: string
}
interface IDrawerContextData {
  isDrawerOpen: boolean
  toggleDrawerOpen: () => void
  drawerOptions: IDrawerOption[]
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void
}

interface IAppThemeProviderProps {
  children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useAppDrawerContext = () => {
  return useContext(DrawerContext)
}

export const AppDrawerProvider: React.FC<IAppThemeProviderProps> = ({
  children
}) => {
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, [])

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOption[]) => {
      setDrawerOptions(newDrawerOptions)
    },
    []
  )

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        drawerOptions,
        toggleDrawerOpen,
        setDrawerOptions: handleSetDrawerOptions
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
