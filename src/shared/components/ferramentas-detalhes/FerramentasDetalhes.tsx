import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material'

interface IFerramentasDetalhes {
  textoBotaoNovo?: string

  mostrarBotaoNovo?: boolean
  mostrarBotaoVoltar?: boolean
  mostrarBotaoApagar?: boolean
  mostrarBotaoSalvar?: boolean
  mostrarBotaoSalvarFechar?: boolean

  clicarNovo?: () => void
  clicarVoltar?: () => void
  clicarApagar?: () => void
  clicarSalvar?: () => void
  clicarSalvarFechar?: () => void
}
export const FerramentasDetalhes: React.FC<IFerramentasDetalhes> = ({
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarFechar = false,

  clicarNovo,
  clicarVoltar,
  clicarApagar,
  clicarSalvar,
  clicarSalvarFechar
}) => {
  const theme = useTheme()
  return (
    <Box
      gap={1}
      component={Paper}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
    >
      {mostrarBotaoSalvar && (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={clicarSalvar}
        >
          Salvar
        </Button>
      )}
      {mostrarBotaoSalvarFechar && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={clicarSalvarFechar}
        >
          Salvar e voltar
        </Button>
      )}
      {mostrarBotaoApagar && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>delete</Icon>}
          onClick={clicarApagar}
        >
          Apagar
        </Button>
      )}
      {mostrarBotaoNovo && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>add</Icon>}
          onClick={clicarNovo}
        >
          {textoBotaoNovo}
        </Button>
      )}
      <Divider variant="middle" orientation="vertical" />
      {mostrarBotaoVoltar && (
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
          onClick={clicarVoltar}
        >
          Voltar
        </Button>
      )}
    </Box>
  )
}
