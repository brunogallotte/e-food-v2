import Trash from '@/components/icons/Trash'
import { TDish } from '@/reducers/reducer'
import { parseToBrl } from '@/utils/parseToBrl'
import Image from 'next/image'
import { RefCallback } from 'react'

type TProduct = {
  foto: string
  nome: string
  preco: number
  item: TDish
  ref?: RefCallback<Element>
  removeFromCart: (item: TDish) => void
}
export default function Product({
  foto,
  nome,
  preco,
  item,
  removeFromCart,
}: TProduct) {
  return (
    <div className="relative flex gap-2 bg-efood-beige-200 px-2 pb-[12px] pt-2">
      <Image
        src={foto}
        className="h-20 w-20 object-cover"
        width={80}
        height={80}
        alt=""
      />
      <div className="flex flex-col">
        <b className="text-lg text-efood-red-100">{nome}</b>
        <span className="mt-4 text-[14px] text-efood-red-100">
          {parseToBrl(preco)}
        </span>
      </div>
      <button onClick={() => removeFromCart(item)}>
        <Trash className="absolute bottom-[12px] right-[8px] cursor-pointer" />
        <span className="sr-only">Apagar do carrinho</span>
      </button>
    </div>
  )
}
