import { TDish } from './reducer'

export enum ActionTypes {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
}

export function addToCartAction(product: TDish | undefined) {
  if (product) {
    return {
      type: ActionTypes.ADD_PRODUCT_TO_CART,
      payload: {
        data: product,
      },
    }
  } else {
    return {
      type: ActionTypes.ADD_PRODUCT_TO_CART,
      payload: {
        data: {},
      },
    }
  }
}

export function removeFromCartAction(product: TDish | undefined) {
  if (product) {
    return {
      type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
      payload: {
        data: product,
      },
    }
  } else {
    return {
      type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
      payload: {
        data: {},
      },
    }
  }
}
