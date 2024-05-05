import { TRestaurant } from '@/app/(index)/pageResources/sections/Restaurants/Restaurants'

type TBannerProps = {
  id: number
}

export default async function Banner({ id }: TBannerProps) {
  const restaurant: TRestaurant = await fetch(
    `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`,
    {
      next: { revalidate: 60 * 60 * 24 * 7 },
    },
  ).then((res) => res.json())

  return (
    <div
      className="relative mx-auto h-[280px] w-full bg-red-500 object-cover"
      style={{
        backgroundImage: `url(${restaurant.capa})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1024px] flex-col justify-between pb-8 pt-[25px]">
        <span className="z-10 text-[32px] font-thin text-white">
          {restaurant.tipo}
        </span>
        <h1 className="z-10 text-[32px] font-bold text-white">
          {restaurant.titulo}
        </h1>
      </div>
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  )
}
