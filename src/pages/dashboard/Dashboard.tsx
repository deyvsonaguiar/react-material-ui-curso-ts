import { FerramentasListagem } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina'

export const Dashboard: React.FC = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página de teste"
      barraDeFerramentas={
        <FerramentasListagem mostrarInputBusca textoBotaoNovo="Nova" />
      }
    ></LayoutBaseDePagina>
  )
}
