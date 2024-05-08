import CardSkeleton from '../../components/Card/CardSkeleton'

export default function RestaurantsSkeleton() {
  return (
    <main className="mx-auto grid min-h-screen max-w-[1024px] grid-cols-2 gap-x-20 gap-y-12 bg-efood-beige-100 pb-[120px] pt-20">
      {Array.from({ length: 6 }).map((item, index) => {
        return <CardSkeleton key={index} />
      })}
    </main>
  )
}
