import CardSkeleton from './CardSkeleton'

export default async function MenuListSkeleton() {
  return (
    <section className="mx-auto grid max-w-[1024px] grid-cols-3 place-items-center gap-x-8 gap-y-10 pb-[120px] pt-[56px]">
      {Array.from({ length: 9 }).map((item, index) => {
        return <CardSkeleton key={index} />
      })}
    </section>
  )
}
