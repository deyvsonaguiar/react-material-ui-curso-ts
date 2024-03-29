import { AxiosError } from 'axios'

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === 'Network Error') {
    return Promise.reject('Erro de conexão!')
  }
  if (error.response?.status === 401) {
    //to-do
  }
  return Promise.reject(error)
}
