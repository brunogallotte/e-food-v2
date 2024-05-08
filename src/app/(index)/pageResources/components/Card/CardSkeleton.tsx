import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function CardSkeleton() {
  return (
    <SkeletonTheme baseColor="#FFEBD9" highlightColor="#FFF8F2">
      <div className="w-full max-w-[472px]">
        <Skeleton className="h-[217px] object-cover" width={472} height={217} />

        <div className="min-h-[181px] border-b border-l border-r border-efood-beige-200 bg-white p-2">
          <Skeleton className="max-w-[161px]" />

          <p className="mt-4 line-clamp-4 text-sm/[22px] text-efood-red-100">
            <Skeleton count={4} />
          </p>
          <Skeleton className="mt-5 h-[28px] max-w-[81px]" />
        </div>
      </div>
    </SkeletonTheme>
  )
}
