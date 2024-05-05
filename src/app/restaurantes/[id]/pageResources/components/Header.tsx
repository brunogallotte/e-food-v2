'use client'

import { CartContext } from '@/contexts/CartContext'
import { toast } from 'sonner'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

export default function Header() {
  const { quantity, handleCartIsVisible } = useContext(CartContext)

  const handleOpenCart = () => {
    if (quantity > 0) {
      return handleCartIsVisible(true)
    }

    return toast.warning('O carrinho está vazio!', {
      description: 'Escolha um dos pratos',
    })
  }

  return (
    <header className="h-[186px] w-full bg-[url('/background-efood.svg')]">
      <div className="mx-auto flex h-full max-w-[1024px] items-center justify-around">
        <b className="max-w-[539px] text-center text-lg font-black text-efood-red-100">
          Restaurantes
        </b>
        <Link href="/">
          <Image
            src="/logo-efood.svg"
            alt="E-food"
            width={125}
            height={57}
            quality={100}
          />
        </Link>
        <b
          onClick={handleOpenCart}
          className="max-w-[539px] cursor-pointer text-center text-lg font-black text-efood-red-100"
        >
          {quantity} produtos no carrinho
        </b>
      </div>
    </header>
  )
}
