'use client'

import * as D from '@radix-ui/react-dialog'
import { TDish } from '@/reducers/reducer'
import Image from 'next/image'
import { parseToBrl } from '@/utils/parseToBrl'
import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContext'

type TDialogProps = TDish

export default function Dialog(props: TDialogProps) {
  const cartContext = useContext(CartContext)

  const { addToCart } = cartContext

  return (
    <D.Root>
      <D.Trigger asChild>
        <button className="mt-2 bg-efood-beige-200 font-bold text-efood-red-100">
          Adicionar ao carrinho
        </button>
      </D.Trigger>
      <D.Portal>
        <D.Overlay className="fixed inset-0 z-20 bg-black/70 backdrop-blur-sm data-[state=closed]:animate-overlayHidden data-[state=open]:animate-overlayShow" />
        <D.Content className="fixed left-[50%] top-[50%] z-30 flex max-h-[344px] w-[90vw] max-w-[1024px] translate-x-[-50%] translate-y-[-50%] gap-6 bg-efood-red-100 p-8 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=closed]:animate-contentHidden data-[state=open]:animate-contentShow focus:outline-none">
          <Image
            src={props.foto}
            alt=""
            width={280}
            height={280}
            className="h-full min-h-[280px] w-full max-w-[280px] object-cover"
          />
          <div className="flex flex-col text-white">
            <b className="text-lg">{props.nome}</b>
            <p className="mt-4">{props.descricao}</p>
            <p className="mt-auto">Serve de: {props.porcao}</p>
            <button
              onClick={() => addToCart(props)}
              className="mt-4 max-w-[218px] bg-efood-beige-200 text-[14px] font-bold text-efood-red-100"
            >
              Adicionar ao carrinho - {parseToBrl(props.preco)}
            </button>
            <D.Close asChild>
              <Image
                className="absolute right-[8px] top-[8px] cursor-pointer"
                width={16}
                height={16}
                alt=""
                src="/icon-close.png"
              />
            </D.Close>
          </div>
        </D.Content>
      </D.Portal>
    </D.Root>
  )
}
