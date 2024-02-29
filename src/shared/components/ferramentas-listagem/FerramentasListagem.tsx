import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material'

interface IFerramentasListagemProps {
  textoBusca?: string
  mostrarInputBusca?: boolean
  mudarTextoBusca?: (novoTexto: string) => void
  textoBotaoNovo?: string
  mostrarBotaoNovo?: boolean
  clicarNovo?: () => void
}

export const FerramentasListagem: React.FC<IFerramentasListagemProps> = ({
  textoBusca = '',
  mostrarInputBusca = false,
  mudarTextoBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  clicarNovo
}) => {
  const theme = useTheme()

  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
    >
      {mostrarInputBusca && (
        <TextField
          size="small"
          placeholder="Pesquisar..."
          value={textoBusca}
          onChange={(e) => mudarTextoBusca?.(e.target.value)}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            variant="contained"
            color="primary"
            disableElevation
            endIcon={<Icon>add</Icon>}
            onClick={clicarNovo}
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  )
}
