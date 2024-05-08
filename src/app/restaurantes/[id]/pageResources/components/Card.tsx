import { TDish } from '@/reducers/reducer'
import Image from 'next/image'
import Dialog from './Dialog'

export default function Card(props: TDish) {
  return (
    <div className="flex min-h-[338px] w-full max-w-[320px] flex-col bg-efood-red-100 p-2">
      <Image
        className="max-h-[167px] w-full max-w-[304px] object-cover"
        src={props.foto}
        width={304}
        height={167}
        alt=""
      />
      <b className="mt-2 font-bold text-efood-beige-200">{props.nome}</b>
      <p className="mt-2 line-clamp-4 text-efood-beige-200">
        {props.descricao}
      </p>
      <Dialog
        descricao={props.descricao}
        foto={props.foto}
        nome={props.nome}
        porcao={props.porcao}
        preco={props.preco}
        id={props.id}
      />
    </div>
  )
}
