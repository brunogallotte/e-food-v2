import { TRestaurant } from '@/app/(index)/pageResources/sections/Restaurants/Restaurants'
import Header from './pageResources/components/Header'
import Banner from './pageResources/components/Banner'
import MenuList from './pageResources/components/MenuList'
import SidebarCart from './pageResources/components/SidebarCart'
import { Metadata } from 'next'

type TRestaurantePageProps = {
  params: {
    id: number
  }
}

export const dynamicParams = false

export default function Restaurante({ params }: TRestaurantePageProps) {
  return (
    <>
      <SidebarCart />
      <Header />
      <Banner id={params.id} />
      <MenuList id={params.id} />
    </>
  )
}

export async function generateMetadata({
  params,
}: TRestaurantePageProps): Promise<Metadata> {
  const restaurant: TRestaurant = await fetch(
    `https://fake-api-tau.vercel.app/api/efood/restaurantes/${params.id}`,
    {
      next: { revalidate: 60 * 60 * 24 * 7 },
    },
  ).then((res) => res.json())

  return {
    title: `E-food - ${restaurant.titulo}`,
    description: restaurant.descricao,
  }
}

export async function generateStaticParams() {
  const restaurantResponse: TRestaurant[] = await fetch(
    `https://fake-api-tau.vercel.app/api/efood/restaurantes/`,
    {
      next: { revalidate: 60 * 60 * 24 * 7 },
    },
  ).then((res) => res.json())

  return restaurantResponse.map((item) => ({
    id: String(item.id),
  }))
}
