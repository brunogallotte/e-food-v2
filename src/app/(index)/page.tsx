import { Metadata } from 'next'
import Header from './pageResources/components/Header/Header'
import Restaurants from './pageResources/sections/Restaurants/Restaurants'

export default function Home() {
  return (
    <>
      <Header />
      <Restaurants />
    </>
  )
}

export const metadata: Metadata = {
  title: 'E-Food',
  description: 'viva experiências gastronômicas no conforto da sua casa',
}
