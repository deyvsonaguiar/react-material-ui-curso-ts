import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  useTheme
} from '@mui/material'

interface IFerramentasDetalhes {
  textoBotaoNovo?: string

  mostrarBotaoNovo?: boolean
  mostrarBotaoVoltar?: boolean
  mostrarBotaoApagar?: boolean
  mostrarBotaoSalvar?: boolean
  mostrarBotaoSalvarFechar?: boolean

  mostrarBotaoNovoCarregando?: boolean
  mostrarBotaoVoltarCarregando?: boolean
  mostrarBotaoApagarCarregando?: boolean
  mostrarBotaoSalvarCarregando?: boolean
  mostrarBotaoSalvarFecharCarregando?: boolean

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
  clicarSalvarFechar,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarFecharCarregando = false
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
      {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (
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
      {mostrarBotaoSalvarCarregando && (
        <Skeleton variant="rectangular" width={108} height={36} />
      )}
      {mostrarBotaoSalvarFechar && !mostrarBotaoSalvarFecharCarregando && (
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
      {mostrarBotaoSalvarFecharCarregando && (
        <Skeleton variant="rectangular" width={180} height={36} />
      )}
      {mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (
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
      {mostrarBotaoApagarCarregando && (
        <Skeleton variant="rectangular" width={108} height={36} />
      )}
      {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && (
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
      {mostrarBotaoNovoCarregando && (
        <Skeleton variant="rectangular" width={108} height={36} />
      )}
      <Divider variant="middle" orientation="vertical" />
      {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
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
      {mostrarBotaoVoltarCarregando && (
        <Skeleton variant="rectangular" width={108} height={36} />
      )}
    </Box>
  )
}
