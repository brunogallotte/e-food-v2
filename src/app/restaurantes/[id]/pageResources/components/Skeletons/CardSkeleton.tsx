import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

export default function CardSkeleton() {
  return (
    <SkeletonTheme baseColor="#FFEBD9" highlightColor="#FFF8F2">
      <div className="flex min-h-[338px] w-full max-w-[320px] flex-col bg-red-300 p-2">
        <Skeleton
          className="max-h-[167px] w-full max-w-[304px] object-cover"
          width={304}
          height={167}
        />

        <Skeleton className="mt-4 font-bold text-efood-beige-200" />
        <Skeleton count={4} className="line-clamp-4 text-efood-beige-200" />
        <Skeleton className="mt-2 h-[24px]" />
      </div>
    </SkeletonTheme>
  )
}
