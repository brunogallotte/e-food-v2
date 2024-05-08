import { TDish } from '@/reducers/reducer'
import Image from 'next/image'
import Dialog from './Dialog'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

export default function Card(props: TDish) {
  return (
    <div className="flex min-h-[338px] w-full max-w-[320px] flex-col bg-efood-red-100 p-2">
      {props.foto ? (
        <Image
          className="max-h-[167px] w-full max-w-[304px] object-cover"
          src={props.foto}
          width={304}
          height={167}
          alt=""
        />
      ) : (
        <Skeleton className="h-[167px] w-full max-w-[304px]" />
      )}
      <b className="mt-2 font-bold text-efood-beige-200">
        {props.nome || <Skeleton />}
      </b>
      <p className="mt-2 line-clamp-4 text-efood-beige-200">
        {props.descricao || <Skeleton count={4} />}
      </p>
      {props.descricao ? (
        <Dialog
          descricao={props.descricao}
          foto={props.foto}
          nome={props.nome}
          porcao={props.porcao}
          preco={props.preco}
          id={props.id}
        />
      ) : (
        <Skeleton className="mt-2 h-[24px] " />
      )}
    </div>
  )
}
