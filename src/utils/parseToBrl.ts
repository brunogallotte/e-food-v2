import { TDish } from '@/reducers/reducer'

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount)
}

export const getTotalPrice = (items: TDish[]) => {
  return items.reduce((acumulator: number, currentProduct) => {
    if (currentProduct.preco) {
      return (acumulator += currentProduct.preco)
    }
    return 0
  }, 0)
}
