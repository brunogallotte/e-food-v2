import Card from '../../components/Card/Card'

export type TRestaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

export default async function Restaurants() {
  const restaurants: TRestaurant[] = await fetch(
    'https://fake-api-tau.vercel.app/api/efood/restaurantes',
    {
      next: { revalidate: 60 * 60 * 24 * 7 },
    },
  ).then((res) => res.json())

  return (
    <main className="mx-auto grid min-h-screen max-w-[1024px] grid-cols-2 gap-x-20 gap-y-12 bg-efood-beige-100 pb-[120px] pt-20">
      {restaurants.map((item) => {
        return (
          <Card
            id={item.id}
            key={item.id}
            title={item.titulo}
            description={item.descricao}
            avaliation={item.avaliacao}
            coverImgUrl={item.capa}
          />
        )
      })}
    </main>
  )
}
