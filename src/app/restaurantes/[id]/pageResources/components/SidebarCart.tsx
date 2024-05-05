'use client'

import { CartContext } from '@/contexts/CartContext'
import { parseToBrl } from '@/utils/parseToBrl'
import { useContext, useEffect, useState } from 'react'
import FormOrder from './Form/FormOrder'
import FormCheckout from './Form/FormCheckout'
import FormSuccess from './Form/FormSuccess'
import Product from './Product'
import { AnimatePresence, motion } from 'framer-motion'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export type TOrderStep = 'cart' | 'order' | 'checkout' | 'success'

export default function SidebarCart() {
  const [orderStep, setOrderStep] = useState<TOrderStep>('cart')
  const [parent] = useAutoAnimate()

  const {
    cart,
    cartIsVisible,
    handleCartIsVisible,
    removeFromCart,
    quantity,
    totalAmount,
  } = useContext(CartContext)

  useEffect(() => {
    if (quantity === 0) {
      handleCartIsVisible(false)
    }
  }, [quantity])

  const handleOrderStep = (step: TOrderStep) => {
    setOrderStep(step)
  }

  return (
    <AnimatePresence>
      {cartIsVisible && quantity > 0 && (
        <>
          <motion.aside
            initial={{ translateX: 360 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 360 }}
            transition={{ ease: 'easeInOut' }}
            className="fixed right-0 z-30 flex h-full w-[360px] flex-col bg-efood-red-100 px-2 py-8"
          >
            {orderStep === 'cart' && (
              <>
                <div
                  ref={parent}
                  className="flex max-h-[332px] flex-col gap-4 overflow-y-auto overflow-x-hidden scrollbar scrollbar-track-efood-red-100 scrollbar-thumb-efood-beige-200"
                >
                  {cart?.map((item) => {
                    return (
                      <Product
                        key={item.id}
                        foto={item.foto}
                        item={item}
                        nome={item.nome}
                        preco={item.preco}
                        removeFromCart={removeFromCart}
                      />
                    )
                  })}
                </div>
                <footer className="mt-6 w-full">
                  <div className="flex justify-between text-[14px] font-bold text-efood-beige-200">
                    <span>Valor total</span>
                    <span>{parseToBrl(totalAmount)}</span>
                  </div>
                  <button
                    onClick={() => setOrderStep('order')}
                    className="mt-5 w-full bg-efood-beige-200 text-[14px] font-bold text-efood-red-100"
                  >
                    Continuar com a entrega
                  </button>
                </footer>
              </>
            )}

            {orderStep === 'order' && (
              <FormOrder handleOrderStep={handleOrderStep} />
            )}

            {orderStep === 'checkout' && (
              <FormCheckout handleOrderStep={handleOrderStep} />
            )}

            {orderStep === 'success' && <FormSuccess />}
          </motion.aside>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => handleCartIsVisible(false)}
            className="fixed inset-0 z-20 bg-black/70 backdrop-blur-sm"
          />
        </>
      )}
    </AnimatePresence>
  )
}
