'use client'

import { addToCartAction, removeFromCartAction } from '@/reducers/actions'
import { CartReducer, TCartState, TDish } from '@/reducers/reducer'
import { ReactNode, createContext, useReducer, useState } from 'react'
import { toast } from 'sonner'

type CartContextType = {
  cart: TDish[] | undefined
  quantity: number
  totalAmount: number
  cartIsVisible: boolean
  addToCart: (dish: TDish | undefined) => void
  removeFromCart: (dish: TDish | undefined) => void
  handleCartIsVisible: (isVisible: boolean) => void
}

type CartContextProviderProps = {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartIsVisible, setCartIsVisible] = useState<boolean>(false)
  const [cartState, dispatch] = useReducer(
    CartReducer,
    {
      cart: [],
      quantity: 0,
      totalAmount: 0,
    } as TCartState,
    (initialState) => initialState,
  )

  const { cart, quantity, totalAmount } = cartState

  const addToCart = (dish: TDish | undefined) => {
    if (dish) {
      dispatch(addToCartAction(dish))
      toast.success(`${dish.nome} foi adicionado ao carrinho!`)
    }
  }

  const removeFromCart = (dish: TDish | undefined) => {
    if (dish) {
      dispatch(removeFromCartAction(dish))
      toast.success(`${dish.nome} foi removido do carrinho!`)
    }
  }

  const handleCartIsVisible = (isVisible: boolean) => {
    setCartIsVisible(isVisible)
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cart,
        quantity,
        totalAmount,
        cartIsVisible,
        handleCartIsVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
