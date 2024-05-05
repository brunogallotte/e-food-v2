import { TRestaurant } from '@/app/(index)/pageResources/sections/Restaurants/Restaurants'
import Card from './Card'

type TMenuListProps = {
  id: number
}

export default async function MenuList({ id }: TMenuListProps) {
  const restaurant: TRestaurant = await fetch(
    `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`,
    {
      next: { revalidate: 60 * 60 * 24 * 7 },
    },
  ).then((res) => res.json())

  return (
    <section className="mx-auto grid max-w-[1024px] grid-cols-3 place-items-center gap-x-8 gap-y-10 pb-[120px] pt-[56px]">
      {restaurant.cardapio.map((item) => {
        return (
          <Card
            key={item.id}
            nome={item.nome}
            descricao={item.descricao}
            foto={item.foto}
            porcao={item.porcao}
            id={item.id}
            preco={item.preco}
          />
        )
      })}
    </section>
  )
}
