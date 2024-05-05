import { getTotalPrice } from '@/utils/parseToBrl'
import { ActionTypes } from './actions'

export type TDish = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type TCartState = {
  cart: TDish[]
  quantity: number
  totalAmount: number
}

type TAction = {
  type: ActionTypes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any
}

export function CartReducer(state: TCartState, action: TAction) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART: {
      const currentDish: TDish = action.payload.data

      const updatedCart = [...state.cart, currentDish]

      const totalAmount = getTotalPrice(updatedCart)

      return {
        quantity: updatedCart.length,
        totalAmount,
        cart: updatedCart,
      }
    }

    case ActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const currentDish: TDish = action.payload.data

      let removed = false

      const updatedCart = state.cart.filter((dish) => {
        if (!removed && dish.id === currentDish.id) {
          removed = true
          return false
        }
        return true
      })

      const totalAmount = getTotalPrice(updatedCart)

      return {
        quantity: updatedCart.length,
        totalAmount,
        cart: updatedCart,
      }
    }
  }
}
