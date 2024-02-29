import { FerramentasDetalhes } from '../../shared/components/ferramentas-detalhes/FerramentasDetalhes'
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina'

export const Dashboard: React.FC = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página de teste"
      barraDeFerramentas={
        <FerramentasDetalhes
          mostrarBotaoSalvarFechar
          mostrarBotaoSalvarFecharCarregando
        />
      }
    >
      Ferramentas de Listagem
    </LayoutBaseDePagina>
  )
}
