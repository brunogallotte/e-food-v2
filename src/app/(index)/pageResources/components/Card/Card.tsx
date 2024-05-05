'use client'

import StarSm from '@/components/icons/StarSm'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type TCardProps = {
  id: number
  title: string
  description: string
  avaliation: number
  coverImgUrl: string
}

export default function Card({
  title,
  description,
  avaliation,
  coverImgUrl,
  id,
}: TCardProps) {
  const router = useRouter()

  return (
    <div className="w-full max-w-[472px]">
      <Image
        className="h-[217px] object-cover"
        src={coverImgUrl}
        alt="Foto do prato"
        width={472}
        height={217}
        quality={100}
      />
      <div className="min-h-[181px] border-b border-l border-r border-efood-red-100 bg-white p-2">
        <header className="flex items-center justify-between">
          <strong className="text-lg font-bold text-efood-red-100">
            {title}
          </strong>
          <div className="flex gap-2">
            <span className="text-lg font-bold text-efood-red-100">
              {avaliation}
            </span>
            <StarSm />
          </div>
        </header>
        <p className="mt-4 line-clamp-4 text-sm/[22px] text-efood-red-100">
          {description}
        </p>
        <button
          onClick={() => router.push(`/restaurantes/${id}`)}
          className="mt-5 bg-efood-red-100 px-1.5 py-1 text-sm font-bold text-efood-beige-200"
        >
          Saiba mais
        </button>
      </div>
    </div>
  )
}
