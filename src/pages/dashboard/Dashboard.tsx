import { BarraFerramentas } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts/LayoutBaseDePagina'

export const Dashboard: React.FC = () => {
  return (
    <LayoutBaseDePagina
      titulo="Página de teste"
      barraDeFerramentas={
        <BarraFerramentas mostrarInputBusca textoBotaoNovo="Nova" />
      }
    ></LayoutBaseDePagina>
  )
}
