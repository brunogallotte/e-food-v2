import { Metadata } from 'next'
import Header from './pageResources/components/Header/Header'
import Restaurants from './pageResources/sections/Restaurants/Restaurants'
import { Suspense } from 'react'
import RestaurantsSkeleton from './pageResources/sections/Restaurants/RestaurantsSkeleton'

export default function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<RestaurantsSkeleton />}>
        <Restaurants />
      </Suspense>
    </>
  )
}

export const metadata: Metadata = {
  title: 'E-Food',
  description: 'viva experiências gastronômicas no conforto da sua casa',
}
