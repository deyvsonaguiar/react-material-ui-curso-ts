import { Environment } from '../../environment'
import { Api } from '../api/axios-config'

interface IListagemPessoa {
  id: number
  email: string
  nomeCompleto: string
  cidadeId: number
}

interface IDetalhesPessoa {
  id: number
  email: string
  nomeCompleto: string
  cidadeId: number
}

type TPessoasTotalCount = {
  data: IListagemPessoa[]
  totalCount: number
}

const getAll = async (
  page = 1,
  filter = ''
): Promise<TPessoasTotalCount | Error> => {
  try {
    const urlRelativa = `/pessoas?_page=${page}
    &_limit            = ${Environment.LIMITE_LINHAS}
    &nomeCompleto_like = ${filter}`
    const { data, headers } = await Api.get(urlRelativa)

    if (data) {
      return {
        data,
        totalCount: Number(
          headers['x-total-count'] || Environment.LIMITE_LINHAS
        )
      }
    }

    return new Error('Erro ao listar os registros...')
  } catch (error) {
    return new Error(
      (error as { message: string }).message ||
        'Erro ao consultar os registros...'
    )
  }
}

const getById = async (id: number): Promise<IDetalhesPessoa | Error> => {
  try {
    const { data } = await Api.get(`/pessoas/${id}`)

    if (data) {
      return data
    }
    return new Error('Erro ao consultar registro')
  } catch (error) {
    console.log(error)
    return new Error(
      (error as { message: string }).message || 'Erro ao consultar o registro'
    )
  }
}
// const create = async (): Promise<any> => {}
// const updateById = async (): Promise<any> => {}
// const deleteById = async (): Promise<any> => {}

export const PessoasService = {
  getAll,
  getById
  // create,
  // updateById,
  // deleteById
}
